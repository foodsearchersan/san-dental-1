import React, { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, List, ListItem, ListItemText, Divider } from '@mui/material';
import { FaAngleDown } from "react-icons/fa";
import BlogList from '../../Json/blog.json';

const style = {
    width: '100%',
    maxWidth: 360,
    bgcolor: 'background.paper',
};

function getMonth(year) {
    let month = [...new Set(BlogList.map(item => item.year === year && item.month))];
    return month;
}

function BlogArchives(props) {
    const { callBack, expansionValue } = props;
    const [expansion, setExpansion] = useState(expansionValue);
    const yearList = [...new Set(BlogList.map(item => item.year))];
    const expansionChange = (val) => {
        let newValue = expansion === val ? "" : val;
        setExpansion(newValue);
    }
    return (
        <div>
            <h4>Archives</h4>
            {yearList.map((data, i) => {
                let monthData = getMonth(data);
                return (
                    <Accordion key={i} expanded={data === expansion ? true : false} onClick={() => expansionChange(data)}>
                        <AccordionSummary
                            expandIcon={<FaAngleDown />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>{data}</Typography>
                        </AccordionSummary>
                        <AccordionDetails className='p-0'>

                            <List sx={style} component="nav" aria-label="blog filter">
                                {monthData.map((mon, j) => {
                                    return mon !== false ? (
                                        <React.Fragment key={j}>
                                            <ListItem onClick={() => callBack(data, mon, expansion)} button>
                                                <ListItemText primary={mon} />
                                            </ListItem>
                                            <Divider />
                                        </React.Fragment>
                                    ) : <></>
                                })}
                            </List>
                        </AccordionDetails>
                    </Accordion>
                )
            })}
        </div>
    )
}

export default BlogArchives;