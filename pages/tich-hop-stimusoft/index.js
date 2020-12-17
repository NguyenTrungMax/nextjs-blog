import Layout from '../../layouts/Layout'
import TichHop from '../../components/tich-hop-stimusoft'
import Head from 'next/head'
import { Fragment } from 'react'
import { appendScript } from '../../utils'

// Thứ tự thực hiện các hàm bất đồng bộ
// 1 là getStaticPaths - hàm bất đồng bộ lấy ra danh sách các params động
// 2 getStaticProps lấy ra các props tĩnh hoặc truy vấn dữ liệu từ bên ngoài sau đó vẫn trả ra props

class Manager extends React.Component {
    componentDidMount() {
        appendScript('/scripts/stimulsoft.reports.js');
        appendScript('/scripts/stimulsoft.viewer.js');
    }

    render() {
        return (
            <Fragment>
                <Head>
                <link rel="stylesheet" href="/styles/tich-hop-stimusoft.css" />
                </Head>
                <Layout
                    code='STIMUSOFT_INTEGRATION'
                    title='Tích hợp Stimusoft'
                >
                    <TichHop />
                </Layout>
            </Fragment>
        )
    }
}

export default Manager;