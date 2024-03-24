import Image from "next/image";
import NavBar from "@components/NavBar";
import Bubbles from "@components/Bubbles";

export default function Home() {
    return (
        <div className="full-page-cont">
            <Bubbles />
            <NavBar active="Sponsors" />
            <div className="lower-page-outer-cont">
                <div className="flex flex-col items-center justify-center">
                    <p className="header-text">Our Sponsors</p>
                    <div className="sponsor-cont flex flex-col justify-between">
                        <div className="sponsor-outer-img-cont xyzdomains-cont flex justify-center items-center">
                            <div className="sponsor-inner-img-cont">
                                <Image
                                    priority={true}
                                    src="/sponsors/xyzdomains_logo.png"
                                    width={250}
                                    height={250}
                                    alt="Thank you to XYZ Domains for sponsoring our hackathon!"
                                />
                            </div>
                        </div>
                        <div className="sponsor-outer-img-cont flex justify-center items-center">
                            <div className="sponsor-inner-img-cont">
                                <Image
                                    priority={true}
                                    src="/sponsors/echo3d_logo.png"
                                    width={250}
                                    height={250}
                                    alt="Thank you to Echo3D for sponsoring our hackathon!"
                                />
                            </div>
                        </div>
                        <div className="sponsor-outer-img-cont flex justify-center items-center">
                            <div className="sponsor-inner-img-cont">
                                <Image
                                    priority={true}
                                    src="/sponsors/interviewcake_logo.png"
                                    width={250}
                                    height={250}
                                    alt="Thank you to Interview Cake for sponsoring our hackathon!"
                                />
                            </div>
                        </div>
                        <div className="sponsor-outer-img-cont flex justify-center items-center">
                            <div className="sponsor-inner-img-cont">
                                <Image
                                    priority={true}
                                    src="/sponsors/aops_logo.png"
                                    width={250}
                                    height={250}
                                    alt="
                                Thank you to Art of Problem Solving for sponsoring our hackathon!"
                                />
                            </div>
                        </div>
                        <div className="sponsor-outer-img-cont flex justify-center items-center">
                            <div className="sponsor-inner-img-cont">
                                <Image
                                    priority={true}
                                    src="/sponsors/wolfram_logo.png"
                                    width={250}
                                    height={250}
                                    alt="Thank you to Wolfram for sponsoring our hackathon!"
                                />
                            </div>
                        </div>
                        <div className="sponsor-outer-img-cont flex justify-center items-center">
                            <div className="sponsor-inner-img-cont">
                                <Image
                                    priority={true}
                                    src="/sponsors/axure_logo.png"
                                    width={250}
                                    height={250}
                                    alt="Thank you to Axure for sponsoring our hackathon!"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
