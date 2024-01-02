import { Flex, Row, Typography } from 'antd'
import React, { useState } from 'react'
import { events } from '../utils/eventData'
import EventCard from './EventCard'
import ReactPaginate from 'react-paginate'
import '../styles/pagination.css'

const { Paragraph } = Typography;

type Props = {
    datas: any;
}

const EventsGrid = ({ datas }: Props) => {

    console.log(datas);

    const itemsPerPage = 6; // Set the number of items per page
    const [currentPage, setCurrentPage] = useState(0);

    const handlePageClick = (data: any) => {
        setCurrentPage(data.selected);
    };

    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedEvents = datas.slice(startIndex, endIndex);

    return (
        <>
            <Row gutter={{ xs: 8, sm: 16, md: 24 }} style={{ rowGap: '20px' }}>
                {paginatedEvents.map((item: any) => (
                    <EventCard key={item._id} data={item} />
                ))}
            </Row>

            <Flex justify='space-between' align='center' style={{ marginTop: '25px' }}>

                <Paragraph style={{ margin: 0, color: '#79788e', fontSize: '14px' }}>
                    Showing
                    <span style={{ fontWeight: 700 }}>&nbsp;{paginatedEvents.length}</span> out of
                    <span style={{ fontWeight: 700 }}>&nbsp;{events.length}</span> results
                </Paragraph>

                <ReactPaginate
                    pageCount={Math.ceil(events.length / itemsPerPage)}
                    pageRangeDisplayed={3}
                    marginPagesDisplayed={1}
                    onPageChange={handlePageClick}
                    containerClassName="pagination"
                    pageClassName="pagination-li"
                    previousClassName="pagination-a"
                    nextClassName="pagination-a"
                    pageLinkClassName="pagination-a"
                    activeClassName="pagination-active"
                    breakLabel="..."
                    nextLabel=">"
                    previousLabel="<"
                    renderOnZeroPageCount={null}
                />

            </Flex>
        </>
    )
}

export default EventsGrid