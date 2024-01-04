import { Button, Table } from 'antd'
import { ColumnsType } from 'antd/es/table';
import React from 'react'
import { latestTransactionItemData } from '../utils/transactionData';
import { useRouter } from 'next/navigation';
import { useGetAllPaymentsQuery } from '@/redux/payment/paymentApi';
import moment from 'moment';

type Props = {}

const LatestTransactionTable = (props: Props) => {

    /*//** RTK calling of payment data getting */
    const { data: paymentData, isLoading }: { data?: any; isLoading: boolean } =
        useGetAllPaymentsQuery({
            limit: 10,
            page: 1,
            sortOrder: 'asc',
        });

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
            title: "Paid",
            dataIndex: "total_amount",
            key: "total_amount",
            render: (_, { total_amount }) => <>৳ {total_amount} </>,
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
                    //   type="primary"
                    onClick={() => router.push(_id)}
                >
                    Details
                </Button>
            ),
        },
    ];

    if (isLoading) return <>Loading...</>

    return (
        <div>
            <Table
                columns={columns}
                dataSource={paymentData?.data}
                rowKey="_id"
                scroll={{ x: true }}
                pagination={false}
            />
        </div>
    )
}

export default LatestTransactionTable