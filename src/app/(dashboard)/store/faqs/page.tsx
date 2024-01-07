'use client'
import AntInput from '@/components/ui/AntInput';
import CustomFaq from '@/components/ui/faqs';
import { Button, Col, Form, Row, message } from 'antd';
import Image from 'next/image';
import React, { useEffect } from 'react';
import style from './static/faqs.module.css';
import { useAddFAQsMutation, useGetAllFAQsQuery } from '@/redux/faqApi/faqApi';
import { extractUserData, getFaqDataFromArray } from '@/Helper/CommonFunction';
import Loader from '@/components/ui/Loader';

const CreateFaqPage = () => {
    const [form] = Form.useForm();
    const [addFaq,{isLoading}]= useAddFAQsMutation();
    const {data,isLoading:faqsLoader}:any=useGetAllFAQsQuery({});

    const onFinish=async (values:any)=>{
        const user:any=extractUserData();
        values.user_id=user.id;
        const res:any = await addFaq(values);
        if(res?.data){
            message.success("Your question sent to admin")
        }else{
            message.error("Something went wrong")
        }
    }

   
    return (
        <div className={style.create_faq}>
            <h2 className={style.h2}>FAQS</h2>
            <div className={style.faqs_data}>
               <div className={style.faqs_list}> 
                {
                    faqsLoader?(
                        <Loader/>
                    ):(
                        <CustomFaq data={getFaqDataFromArray(data?.data||[])}/>
                    )
                }
               </div>
               <div className={style.faqs_image}> 
                {/* <Image alt='faq banner' src={'/finalFaq.jpg'} width={400} height={400} layout='responsive'/> */}

                    <Form
                      form={form}
                      autoComplete="off"
                      layout="vertical"
                      onFinish={onFinish}
                      onFinishFailed={(error) => {
                        console.log({ error });
                      }}
                    >
                      <Row>
                        <Col className="gutter-row" xs={24} sm={24}>
                          <AntInput
                            title={"Title"}
                            name={"title"}
                            uppercase={true}
                            req_message={"Title is required"}
                            placeholder={"type Title"}
                            whiteSpace={true}
                          />
                        </Col>
                        <Col className="gutter-row" xs={24} sm={24}>
                          <AntInput
                            title={"Description"}
                            name={"description"}
                            uppercase={true}
                            req_message={"Description is required"}
                            placeholder={"type Description name"}
                            whiteSpace={true}
                          />
                        </Col>
                        <Col className="gutter-row" xs={24} sm={24}>
                            <Button
                               type="primary"
                               htmlType="submit"
                               loading={isLoading}
                               size="large"
                               style={{marginLeft:'10px'}}
                             >
                               Add Faqs
                             </Button>
                        </Col>
                      </Row>
                      
                    </Form>
               </div>
            </div>
            
        </div>
    );
};

export default CreateFaqPage;