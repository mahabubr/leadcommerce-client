import React from 'react'
import { Button, DatePicker, Flex, Select } from 'antd';
import { productItemStatus, productItems } from '../utils/productData';

type Props = {
    selectedCategory: string | undefined;
    setSelectedCategory: (selectedCategory: string | undefined) => void;
    selectedStatus: string | undefined;
    setSelectedStatus: (selectedStatus: string | undefined) => void;
}

const SearchFilterBar = ({ selectedCategory, setSelectedCategory, selectedStatus, setSelectedStatus }: Props) => {

    const handleChange = (value: string) => setSelectedCategory(value);
    const handleStatusChange = (value: string) => setSelectedStatus(value);

    return (
        <Flex justify='space-between' align="center" style={{ marginBottom: '20px', width: '100%' }}>

            <Select
                size="large"
                placeholder="Select a category"
                onChange={handleChange}
                style={{ width: '300px' }}
                options={productItems}
                defaultValue={selectedCategory}
            />

            <Flex gap="small" wrap="wrap">

                <DatePicker
                    size="large"
                    placeholder='yyyy-mm-dd'
                />

                <Select
                    size="large"
                    placeholder="Status"
                    onChange={handleStatusChange}
                    style={{ width: '300px', textTransform: 'capitalize' }}
                    options={productItemStatus}
                    defaultValue={selectedStatus}
                    dropdownRender={(menu) => (
                        <div>
                            {menu}
                            <style>
                                {`
                              .ant-select-item-option{
                                text-transform: capitalize;
                              }
                            `}
                            </style>
                        </div>
                    )}
                />
            </Flex>

        </Flex>
    )
}

export default SearchFilterBar