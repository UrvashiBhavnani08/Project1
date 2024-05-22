import React, { useEffect } from 'react';
// import { Card, CardContent, Typography } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import { getCompanies } from '../../../redux/sales/salesAction';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import { Avatar, Card } from 'antd';
import avatar from '../../../data/avatar.png'
const { Meta } = Card;


// import {
//   Card,
//   CardHeader,
//   CardBody,
//   CardFooter,
//   Typography,
//   Avatar,
//   Tooltip,
// } from "@material-tailwind/react";

// const CompanyCard = () => {
//   return (
//     <Card>
//       <CardContent>
//         <Typography variant="h5" component="h2">
//           {company.companyName}
//         </Typography>
//         <Typography color="textSecondary">
//           {company.companyType} - {company.industryType}
//         </Typography>
//         <Typography variant="body2" component="p">
//           {company.description}
//         </Typography>
//       </CardContent>
//     </Card>
//   );
// };

const CompanyCards = () => {
    const companies = useSelector((state) => state.sales.companies);
    // const loading = useSelector((state) => state.loading);
    // const error = useSelector((state) => state.error);
    const dispatch = useDispatch();
    console.log(companies);

    useEffect(() => {
        dispatch(getCompanies());
    }, [dispatch]);
    return (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
            {companies.map((company) => (

                <Card
                    style={{
                        width: 600,
                        margin: 6
                    }}
                    cover={
                        <img
                            alt="example"
                            src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
                        />
                    }
                    actions={[
                        <SettingOutlined key="setting" />,
                        <EditOutlined key="edit" />,
                        <EllipsisOutlined key="ellipsis" />,
                    ]}
                >
                    <Meta
                        avatar={<Avatar src={avatar} />}
                        title={company.client_name}
                        description="This is the description"
                    />
                </Card>

            ))}
        </div>
    );
};

export default CompanyCards;