import Layout from '../../layouts/Layout'

// Thứ tự thực hiện các hàm bất đồng bộ
// 1 là getStaticPaths - hàm bất đồng bộ lấy ra danh sách các params động
// 2 getStaticProps lấy ra các props tĩnh hoặc truy vấn dữ liệu từ bên ngoài sau đó vẫn trả ra props
export default function Post({ postData }) {
    return (
        <Layout
            code='STATISTICAL'
            title='Thống kê'
        >
        </Layout>
    )
}