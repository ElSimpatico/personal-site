import {
    IconNames,
    UiLink,
    UiIcon,
    UiTag,
    UiAccordion,
} from '@personal-site/ui-kit-react';
import React, { ReactElement } from 'react';

import './about.scss';

export function About(): ReactElement {
    return (
        <main className="aboutme">
            <section className="aboutme__section mainSection">
                <h1 className="aboutme__title mainSection__title">About Me</h1>
                <UiLink
                    className="aboutme__link mainSection__link"
                    url={'#'}
                    accessibleLabel="download curriculum vitae"
                >
                    <span>Download CV</span>
                </UiLink>
                <p className="aboutme__description mainSection__description">
                    The Generator App is an online tool that helps you to export
                    ready-made templates ready to work as your future website.
                    It helps you to combine slides, panels and other components
                    and export it as a set of static files: HTML/CSS/JS.
                </p>
            </section>
            <section className="aboutme__section">
                <h1 className="aboutme__title">Work Experience</h1>
                <ul className="aboutme__list">
                    <li className="aboutme__listItem">
                        <UiAccordion hideArrow>
                            <div className="boxInfo" slot="header">
                                <h3 className="boxInfo__title">
                                    Experience title item
                                </h3>
                                <div className="boxInfo__timeTag">
                                    <UiTag>Full time</UiTag>
                                </div>
                                <div className="boxInfo__timeRange tag">
                                    <UiIcon
                                        className="tag__icon"
                                        name={IconNames.calendar}
                                    ></UiIcon>
                                    <span>MM YYYY - MM YYYY</span>
                                </div>
                                <ul className="boxInfo__taglist">
                                    <li className="boxInfo__taglistitem">
                                        <div className="tag">
                                            <UiIcon
                                                className="tag__icon"
                                                name={IconNames.globe}
                                            ></UiIcon>
                                            Experience company name
                                        </div>
                                    </li>
                                    <li className="boxInfo__taglistitem">
                                        <div className="tag">
                                            <UiIcon
                                                className="tag__icon"
                                                name={IconNames.pin}
                                            ></UiIcon>
                                            Experience location
                                        </div>
                                    </li>
                                </ul>
                            </div>

                            <div className="boxDescription" slot="body">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Donec dictum feugiat massa,
                                    sed hendrerit libero aliquam nec. Sed id
                                    enim metus. Phasellus varius risus lorem.
                                    Interdum et malesuada fames ac ante ipsum
                                    primis in faucibus. Quisque in cursus erat,
                                    vel rhoncus tellus. Donec quis augue mi.
                                    Maecenas iaculis pharetra mollis. Sed
                                    ullamcorper tortor sed ligula hendrerit,
                                    vitae blandit enim rutrum. Donec imperdiet,
                                    arcu at congue volutpat, leo nunc efficitur
                                    nisi, sit amet venenatis lacus turpis in
                                    orci. Nulla ut sapien leo. Quisque quis est
                                    euismod, euismod massa a, rutrum ipsum.
                                </p>
                            </div>
                        </UiAccordion>
                    </li>
                    <li className="aboutme__listItem">
                        <UiAccordion hideArrow>
                            <div className="boxInfo" slot="header">
                                <h3 className="boxInfo__title">
                                    Experience title item
                                </h3>
                                <div className="boxInfo__timeTag">
                                    <UiTag>Full time</UiTag>
                                </div>
                                <div className="boxInfo__timeRange tag">
                                    <UiIcon
                                        className="tag__icon"
                                        name={IconNames.calendar}
                                    ></UiIcon>
                                    <span>MM YYYY - MM YYYY</span>
                                </div>
                                <ul className="boxInfo__taglist">
                                    <li className="boxInfo__taglistitem">
                                        <div className="tag">
                                            <UiIcon
                                                className="tag__icon"
                                                name={IconNames.globe}
                                            ></UiIcon>
                                            Experience company name
                                        </div>
                                    </li>
                                    <li className="boxInfo__taglistitem">
                                        <div className="tag">
                                            <UiIcon
                                                className="tag__icon"
                                                name={IconNames.pin}
                                            ></UiIcon>
                                            Experience location
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="boxDescription" slot="body">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Donec dictum feugiat massa,
                                    sed hendrerit libero aliquam nec. Sed id
                                    enim metus. Phasellus varius risus lorem.
                                    Interdum et malesuada fames ac ante ipsum
                                    primis in faucibus. Quisque in cursus erat,
                                    vel rhoncus tellus. Donec quis augue mi.
                                    Maecenas iaculis pharetra mollis. Sed
                                    ullamcorper tortor sed ligula hendrerit,
                                    vitae blandit enim rutrum. Donec imperdiet,
                                    arcu at congue volutpat, leo nunc efficitur
                                    nisi, sit amet venenatis lacus turpis in
                                    orci. Nulla ut sapien leo. Quisque quis est
                                    euismod, euismod massa a, rutrum ipsum.
                                </p>
                            </div>
                        </UiAccordion>
                    </li>
                    <li className="aboutme__listItem">
                        <UiAccordion hideArrow>
                            <div className="boxInfo" slot="header">
                                <h3 className="boxInfo__title">
                                    Experience title item
                                </h3>
                                <div className="boxInfo__timeTag">
                                    <UiTag>Full time</UiTag>
                                </div>
                                <div className="boxInfo__timeRange tag">
                                    <UiIcon
                                        className="tag__icon"
                                        name={IconNames.calendar}
                                    ></UiIcon>
                                    <span>MM YYYY - MM YYYY</span>
                                </div>
                                <ul className="boxInfo__taglist">
                                    <li className="boxInfo__taglistitem">
                                        <div className="tag">
                                            <UiIcon
                                                className="tag__icon"
                                                name={IconNames.globe}
                                            ></UiIcon>
                                            Experience company name
                                        </div>
                                    </li>
                                    <li className="boxInfo__taglistitem">
                                        <div className="tag">
                                            <UiIcon
                                                className="tag__icon"
                                                name={IconNames.pin}
                                            ></UiIcon>
                                            Experience location
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="boxDescription" slot="body">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Donec dictum feugiat massa,
                                    sed hendrerit libero aliquam nec. Sed id
                                    enim metus. Phasellus varius risus lorem.
                                    Interdum et malesuada fames ac ante ipsum
                                    primis in faucibus. Quisque in cursus erat,
                                    vel rhoncus tellus. Donec quis augue mi.
                                    Maecenas iaculis pharetra mollis. Sed
                                    ullamcorper tortor sed ligula hendrerit,
                                    vitae blandit enim rutrum. Donec imperdiet,
                                    arcu at congue volutpat, leo nunc efficitur
                                    nisi, sit amet venenatis lacus turpis in
                                    orci. Nulla ut sapien leo. Quisque quis est
                                    euismod, euismod massa a, rutrum ipsum.
                                </p>
                            </div>
                        </UiAccordion>
                    </li>
                </ul>
            </section>
            <section className="aboutme__section">
                <h1 className="aboutme__title">Education</h1>
                <ul className="aboutme__list">
                    <li className="aboutme__listItem">
                        <UiAccordion hideArrow>
                            <div className="boxInfo" slot="header">
                                <h3 className="boxInfo__title">
                                    Experience title item
                                </h3>
                                <div className="boxInfo__timeTag">
                                    <UiTag>Full time</UiTag>
                                </div>
                                <div className="boxInfo__timeRange tag">
                                    <UiIcon
                                        className="tag__icon"
                                        name={IconNames.calendar}
                                    ></UiIcon>
                                    <span>MM YYYY - MM YYYY</span>
                                </div>
                                <ul className="boxInfo__taglist">
                                    <li className="boxInfo__taglistitem">
                                        <div className="tag">
                                            <UiIcon
                                                className="tag__icon"
                                                name={IconNames.globe}
                                            ></UiIcon>
                                            Experience company name
                                        </div>
                                    </li>
                                    <li className="boxInfo__taglistitem">
                                        <div className="tag">
                                            <UiIcon
                                                className="tag__icon"
                                                name={IconNames.pin}
                                            ></UiIcon>
                                            Experience location
                                        </div>
                                    </li>
                                </ul>
                            </div>
                            <div className="boxDescription" slot="body">
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur
                                    adipiscing elit. Donec dictum feugiat massa,
                                    sed hendrerit libero aliquam nec. Sed id
                                    enim metus. Phasellus varius risus lorem.
                                    Interdum et malesuada fames ac ante ipsum
                                    primis in faucibus. Quisque in cursus erat,
                                    vel rhoncus tellus. Donec quis augue mi.
                                    Maecenas iaculis pharetra mollis. Sed
                                    ullamcorper tortor sed ligula hendrerit,
                                    vitae blandit enim rutrum. Donec imperdiet,
                                    arcu at congue volutpat, leo nunc efficitur
                                    nisi, sit amet venenatis lacus turpis in
                                    orci. Nulla ut sapien leo. Quisque quis est
                                    euismod, euismod massa a, rutrum ipsum.
                                </p>
                            </div>
                        </UiAccordion>
                    </li>
                </ul>
            </section>
        </main>
    );
}
