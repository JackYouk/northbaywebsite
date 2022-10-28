import Head from 'next/head';
import {useEffect, useState} from 'react';
import VideoPlayer from '../../components/common/VideoPlayer';
import CounterTwo from '../../components/counters/CounterTwo';
import Layout from '../../components/layouts/Layout';
import TeamMember from '../../components/teams/TeamMember';
import TeamData from '../../data/Team.json';
import {flatDeep} from '../../helpers/utilities';
import Image from "next/image";
import Breadcrumb from "../../components/breadcrumb/Breadcrumb";


const Team = () => {
    const [isWindow, setIsWindow] = useState(false);
    const [departments, setDepartments] = useState([]);
    const [activeDepartment, setActiveDepartment] = useState(0);

    const getDepartments = () => {
        let allDepartments = TeamData.map((item) => item.department),
            singleDepartmentArray = flatDeep(allDepartments),
            departments = "";

        departments = singleDepartmentArray.reduce((a, b) => {
            if (a.indexOf(b) < 0) {
                a.push(b);
            }
            return a;
        }, []);

        setDepartments(departments);
    };

    useEffect(() => {
        getDepartments();
        setIsWindow(true);
    }, []);

    return (
        <Layout>
            <Head>
                <title>Our Team</title>
            </Head>

            <main className="page-wrapper">
                <Breadcrumb title="Our Team" current="Our Team"/>

                <CounterTwo/>

                <div className="axil-team-area ax-section-gap bg-color-lightest">
                    <div className="container">
                        <div className="row align-items-end">
                            <div className="col-lg-12 col-xl-4">
                                <div className="section-title text-start">
                                    <h2 className="title mb--0">
                                        <span>Select department:</span>
                                    </h2>
                                </div>
                            </div>
                            <div className="col-lg-12 col-xl-8 mt_lg--30 mt_md--30 mt_sm--30">
                                <ul
                                    className="nav nav-tabs team-nab-tabs justify-content-start justify-content-xl-end"
                                    id="myTab"
                                    role="tablist"
                                >
                                    <li className="nav-item">
                                        <a
                                            className={`nav-link ${
                                                activeDepartment === 0 ? "active" : ""
                                            }`}
                                            id="allDepartment-tab"
                                            data-bs-toggle="tab"
                                            href="#allDepartment"
                                            role="tab"
                                            aria-controls="allDepartment"
                                            aria-selected="true"
                                        >
                                            All
                                        </a>
                                    </li>
                                    {departments?.map((department, index) => (
                                        <li className="nav-item" key={`department-${index}`}>
                                            <a
                                                className={`nav-link ${
                                                    activeDepartment === index + 1 ? "active" : ""
                                                }`}
                                                id={`${department.replace(" ", "")}-tab`}
                                                data-bs-toggle="tab"
                                                href={`#${department.replace(" ", "")}`}
                                                role="tab"
                                                aria-controls={department.replace(" ", "")}
                                                aria-selected={
                                                    activeDepartment === index + 1 ? "true" : "false"
                                                }
                                                onClick={() => setActiveDepartment(index + 1)}
                                            >
                                                {department}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="tab-content" id="myTabContent">
                            <div
                                className={`tab-pane fade ${
                                    activeDepartment === 0 ? "show active" : ""
                                }`}
                                id="allDepartment"
                                role="tabpanel"
                                aria-labelledby="allDepartment-tab"
                            >
                                <div className="row">
                                    {TeamData?.map((team, teamIndex) => (
                                        <div
                                            className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12 mt--60 mt_sm--30 mt_md--30"
                                            key={`team-${teamIndex}`}
                                        >
                                            <TeamMember team={team}/>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {departments?.map((department, index) => (
                                <div
                                    key={`${department.replace(" ", "")}-tab`}
                                    className={`tab-pane fade ${
                                        activeDepartment === index + 1 ? "show active" : ""
                                    }`}
                                    id={department.replace(" ", "")}
                                    role="tabpanel"
                                    aria-labelledby={`${department.replace(" ", "")}-tab`}
                                >
                                    <div className="row">
                                        {TeamData?.map((team, teamIndex) => {
                                            if (team.department.includes(department)) {
                                                return (
                                                    <div
                                                        className="col-xl-3 col-lg-6 col-md-6 col-sm-6 col-12 mt--60 mt_sm--30 mt_md--30"
                                                        key={`team-${teamIndex}`}
                                                    >
                                                        <TeamMember team={team}/>
                                                    </div>
                                                );
                                            }
                                        })}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="axil-video-area  bg-color-white">
                    {/* <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <SectionTitle
                                    title=""
                                    subtitle=""
                                    description=""
                                    color="extra08-color"
                                    alignment="center"
                                />
                            </div>
                        </div>
                    </div> */}
                    <div className="axil-video-wrapper mt--60 mt_sm--30 mt_md--30">
                        <div className="thumbnail position-relative">
                            <Image
                                width={1920}
                                height={760}
                                src="/images/bg/video-bg.png"
                                alt="Video Bg Images"
                            />
                            <div className="video-button position-to-top">
                                <a
                                    className="play__btn video-btn"
                                    href="https://www.youtube.com/watch?v=lIkkSAKaDoc"
                                    data-bs-toggle="modal"
                                    data-bs-target="#exampleModal"
                                >
                                    <span className="triangle"/>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {isWindow && (
                    <VideoPlayer url="https://www.youtube.com/watch?v=lIkkSAKaDoc"/>
                )}
            </main>
        </Layout>
    );
};

export default Team;
