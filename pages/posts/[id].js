import Layout from '../../layouts/Layout'
import Date from '../../components/Date'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import utilStyles from '../../styles/utils.module.css'

// Thứ tự thực hiện các hàm bất đồng bộ
// 1 là getStaticPaths - hàm bất đồng bộ lấy ra danh sách các params động
// 2 getStaticProps lấy ra các props tĩnh hoặc truy vấn dữ liệu từ bên ngoài sau đó vẫn trả ra props
export default function Post({ postData }) {
    return (
        <Layout>
            <Head>
                <title>{postData.title}</title>
            </Head>
            <article>
                <h1 className={utilStyles.headingXl}>{postData.title}</h1>
                <div className={utilStyles.lightText}>
                    <Date dateString={postData.date} />
                </div>
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </article>
        </Layout>
    )
}

export async function getStaticPaths() {
    //  Return a list of possible value for id
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    // Fetch necessary data for the blog post using params.id
    const postData = await getPostData(params.id)
    return {
        props: {
            postData
        }
    }
}