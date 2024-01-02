'use client'
import { Card, Row, Col, Button, Upload, Form, Input} from 'antd'
import Image from 'next/image'
import { UploadOutlined, DeleteOutlined } from '@ant-design/icons'
import { paths } from '@/paths/paths'
import { uploadProps } from '@/Helper/utils'
import useAddEvent from './useAddEvent'
import style from './add_event.module.css';
import PCBreadcrumb from '@/components/products/partials/PCBreadcrumb'
import AntInput from '@/components/ui/AntInput'
import DateTimePicker from '@/components/event/dateTimePicker'
import AntDateTimePicker from '@/components/event/dateTimePicker'

const initialData = {
    title: "",
    Event_category: "",
    slug: "",
    description: "",
    fullDescription: "",
    quantity: "",
    price: "",
    tags: '',
};

const AddEvent = () => {
    const {handleCheckboxChange,onFinish,fileList,form,isLoading,api,currentImage,checkedValues,contextHolder,setCurrentImage,setFileList,beforeFileUpload,onChangeFileHandle} = useAddEvent();

    return (
        <div className={style.add_event_cont}>
            {contextHolder}
            <PCBreadcrumb title='Create Event' route={paths.add_events}/>

            <Card title="Add Event" bordered style={{ marginTop: '20px' }}>

                <Form
                    form={form}
                    autoComplete="off"
                    layout="vertical"
                    onFinish={onFinish}
                    onFinishFailed={(error) => {
                        console.log({ error });
                    }}
                >

                    <Row gutter={{ xs: 8, sm: 16, md: 24 }}>
                        {/* <Col className="gutter-row" span={9}>
                            <Card title="" bordered style={{ maxHeight: '800px', position: 'relative' }}>

                                <Image
                                    src={currentImage ? currentImage : '/preview.jpg'}
                                    height={500}
                                    width={630}
                                    alt='preview'
                                    style={{
                                        width: '100%',
                                        height: '50%',
                                        borderRadius: '15px',
                                    }}
                                />


                                <div style={{ position: 'absolute', top: '40px', left: '37px', }}>
                                    <Upload
                                        accept=".png, .jpg, .jpeg"
                                        maxCount={1}
                                        showUploadList={false}
                                        beforeUpload={beforeFileUpload}
                                        onChange={onChangeFileHandle}
                                        {...uploadProps}
                                    >
                                        <Button icon={<UploadOutlined />} size='large'></Button>
                                    </Upload>
                                </div>
                                <div style={{ position: 'absolute', top: '40px', right: '37px', }}>
                                    <Button icon={<DeleteOutlined />} onClick={() => { setFileList(null); setCurrentImage(null) }} size='large'></Button>
                                </div>
                            </Card>
                        </Col> */}

                        <Col className="gutter-row" span={24}>
                            <Row >
                                <Col className="gutter-row" xs={24} sm={12} lg={8}>
                                    <AntInput
                                        title={"Event Title"}
                                        name={"eventTitle"}
                                        uppercase={true}
                                        req_message={"Event Title is required"}
                                        placeholder={"type Event Title"}
                                        whiteSpace={true}
                                    />
                                </Col>
                                <Col className="gutter-row" xs={24} sm={12} lg={8}>
                                    <AntInput
                                        title={"Organizer"}
                                        name={"organizer"}
                                        uppercase={true}
                                        req_message={"Organizer is required"}
                                        placeholder={"type organizer name"}
                                        whiteSpace={true}
                                    />
                                </Col>
                                <Col className="gutter-row" xs={24} sm={12} lg={8}>
                                    <AntInput
                                        title={"Location"}
                                        name={"location"}
                                        uppercase={true}
                                        req_message={"Location is required"}
                                        placeholder={"type Location"}
                                        whiteSpace={true}
                                    />
                                </Col>
                                <Col className="gutter-row" xs={24} sm={12} lg={8}>
                                    <AntInput
                                        title={"Ticket Price"}
                                        name={"ticketPrice"}
                                        uppercase={true}
                                        req_message={"Ticket Price is required"}
                                        placeholder={"type Ticket Price"}
                                        whiteSpace={true}
                                    />
                                </Col>
                                <Col className="gutter-row" xs={24} sm={12} lg={8}>
                                    <AntInput
                                        title={"Seat number"}
                                        name={"seat"}
                                        uppercase={true}
                                        req_message={"Seat number is required"}
                                        placeholder={"type Seat number"}
                                        type='number'
                                        whiteSpace={true}
                                    />
                                </Col>
                                <Col className="gutter-row" xs={24} sm={12} lg={8}>
                                    <AntInput
                                        title={"Description"}
                                        name={"description"}
                                        uppercase={true}
                                        req_message={"Description is required"}
                                        placeholder={"type Description"}
                                        whiteSpace={true}
                                        textarea={true}
                                    />
                                </Col>
                                <Col className="gutter-row" xs={24} sm={12} lg={8}>
                                    <AntDateTimePicker
                                        title={"Event Date"}
                                        name={"eventDate"}
                                        uppercase={true}
                                        req_message={"Event Date is required"}
                                        whiteSpace={true}
                                    />
                                </Col>
                                <Col className="gutter-row" xs={24} sm={12} lg={12}>
                                    <AntDateTimePicker
                                        title={"StartTime"}
                                        name={"startTime"}
                                        uppercase={true}
                                        req_message={"StartTime is required"}
                                        whiteSpace={true}
                                    />
                                </Col>
                            </Row>
                            <Button type="primary" htmlType="submit"
                                loading={isLoading}
                                size="large">Add Evente</Button>
                        </Col>

                    </Row>
                </Form >
            </Card >
        </div>
    )
}

export default AddEvent