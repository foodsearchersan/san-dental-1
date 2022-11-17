import React, { useState } from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography, List, ListItem, ListItemText, Divider } from '@mui/material';
import { FaAngleDown } from "react-icons/fa";
import BlogList from '../../Json/blog.json';

const style = {
    width: '100%',
    maxWidth: 360,
    bgcolor: 'background.paper',
};
function BlogArchives(props) {
    const [expansion, setExpansion] = useState("");
    const { callBack } = props;
    const yearList = [...new Set(BlogList.map(item => item.year))];
    const expansionChange = (val) => {
        setExpansion(val);
    }
    return (
        <div>
            <h4>Archives</h4>
            {yearList.map((data, i) => {
                return (
                    <Accordion key={i} expanded={data === expansion} onClick={() => expansionChange(data)}>
                        <AccordionSummary
                            expandIcon={<FaAngleDown />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                        >
                            <Typography>{data}</Typography>
                        </AccordionSummary>
                        <AccordionDetails className='p-0'>
                            <List sx={style} component="nav" aria-label="mailbox folders">
                                <ListItem onClick={() => callBack(data, "blog")} button>
                                    <ListItemText primary="Blog" />
                                </ListItem>
                                <Divider />
                                <ListItem onClick={() => callBack(data, "vlog")} button divider>
                                    <ListItemText primary="Vlog" />
                                </ListItem>
                            </List>
                        </AccordionDetails>
                    </Accordion>
                )
            })}
        </div>
    )
}

export default BlogArchives;