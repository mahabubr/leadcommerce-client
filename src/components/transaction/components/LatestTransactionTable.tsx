import { Button, Table } from 'antd'
import { ColumnsType } from 'antd/es/table';
import React from 'react'
import { latestTransactionItemData } from '../utils/transactionData';
import { useRouter } from 'next/navigation';

type Props = {}

const LatestTransactionTable = (props: Props) => {

    // global
    const router = useRouter();

    // data columns
    const columns: ColumnsType<any> = [

        {
            title: "Transaction Id",
            dataIndex: "transId",
            key: "transId",
            render: (_, { transId }) => <>{transId} </>,
        },

        {
            title: "Paid",
            dataIndex: "paid",
            key: "paid",
            render: (_, { paid }) => <>৳ {paid} </>,
        },
        {
            title: "Date",
            dataIndex: "date",
            key: "date",
            render: (_, { date }) => <>{date} </>,
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

    return (
        <div>
            <Table
                columns={columns}
                dataSource={latestTransactionItemData}
                // rowKey="_id"
                scroll={{ x: true }}
            // pagination={false}
            />
        </div>
    )
}

export default LatestTransactionTable