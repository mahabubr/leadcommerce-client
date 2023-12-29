import { Table, Flex, Button } from 'antd';
import { ColumnsType } from 'antd/es/table';
import Image from 'next/image';
import React from 'react'
import moment from 'moment';
import { useRouter } from 'next/navigation';

type Props = {
    datas: any;
    setCurrentClickData: any;
}

const PaymentTable = ({ datas, setCurrentClickData }: Props) => {

    // global
    const router = useRouter();

    // data columns
    const columns: ColumnsType<any> = [
        {
            title: "Transaction Id",
            dataIndex: "payment_code",
            key: "payment_code",
            render: (_, { payment_code }) => <>{payment_code} </>,
        },
        {
            title: "Paid Id",
            dataIndex: "total_amount",
            key: "total_amount",
            render: (_, { total_amount }) => <>৳ {total_amount} </>,
        },
        {
            title: "Method",
            dataIndex: "method",
            key: "method",
            render: (_, { }) => (
                <Flex align='center' style={{ gap: '10px' }}>
                    <Image
                        src='/mastercard.png'
                        alt=''
                        width={40}
                        height={40}
                    />

                    Master Card
                </Flex>

            ),
        },
        {
            title: "Date",
            dataIndex: "createdAt",
            key: "createdAt",
            render: (_, { createdAt }) => <>
                {moment(createdAt).format('DD.MM.YYYY, HH:mm')}
            </>,
        },
        {
            title: "Action",
            key: "action",
            render: (_, { _id }) => (
                <Button
                    onClick={() => router.push(`/payments/${_id}`)}
                >
                    Details
                </Button>
            ),
        },
    ];

    return (
        <>
            <Table
                columns={columns}
                dataSource={datas}
                rowKey="_id"
                scroll={{ x: true }}
                pagination={false}
                onRow={(record, rowIndex) => ({
                    onClick: () => setCurrentClickData(record),
                })}
            />
        </>
    )
}

export default PaymentTable