import React, { Component, Fragment } from 'react'
import Head from 'next/head'
import styles from './style/layout.module.css'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'

const IconSvgPath = '/svg/svg-overview.svg'
class Layout extends Component {
    constructor() {
        super()
        this.state = {
            menus: [
                {
                    name: 'Tổng quan',
                    code: 'OVERVIEW',
                    link: 'tong-quan'
                },
                {
                    name: 'Quản lý công việc',
                    code: 'WORK_FLOW_MANAGEMENT',
                    link: 'quan-ly-cong-viec'
                },
                {
                    name: 'Báo cáo tiến độ',
                    code: 'PROGRESS_REPORT',
                    link: 'bao-cao-tien-do'
                },
                {
                    name: 'Thống kê',
                    code: 'STATISTICAL',
                    link: 'thong-ke'
                },
                {
                    name: 'Quản trị hệ thống',
                    code: 'SYSTEM_MANAGEMENT',
                    link: 'quan-tri-he-thong'
                }
            ]
        }
    }

    componentDidMount() {

    }

    generateMenu = () => {
        const { menus } = this.state;
        const { code, title } = this.props;
        return (
            <Fragment>
                <Head>
                    <title>{title}</title>
                </Head>
                <div className={styles.container}>
                    <header className={styles.header}>
                        <div className="logo">logo</div>
                        <img src="/images/profile.jpg" alt="image-user" className={styles.iconUser} />
                    </header>
                    <main className={styles.main}>
                        <div className={styles.leftSidebar}>
                            <ul className={styles.ul}>
                                {menus.map((item, index) => {
                                    return <Link key={index} href={item.link}>
                                        <li className={`${styles.li} ${item.code === code ? styles.active: ''}`}>
                                            <img src={IconSvgPath} alt='icon menu sidebar' className={styles.menuIcon} />
                                            <span className={styles.menuText}>{item.name}</span>
                                        </li>
                                    </Link>
                                })}
                            </ul>
                        </div>
                        <div className={styles.mainContent}></div>
                    </main>
                </div>
            </Fragment>

        )

    }

    render() {
        return this.generateMenu();
    }
}

export default Layout;
