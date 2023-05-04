import { React, useState } from "react";
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import 'react-accessible-accordion/dist/fancy-example.css';
import { MdArrowDropDown } from 'react-icons/md'
import data from "../../utils/accordion";
import './Value.css'

export default function Value() {

    let changer = ['changing1.png', 'changing2.png', 'changing3.png'] // Array of pictures
    const [index, setIndex] = useState(0)
    const timer = setTimeout(indexChanger, 5000) /* SetInterval or setTimeout? */
    function indexChanger() {
        index < changer.length - 1 ? setIndex(index + 1) : setIndex(0)
    }

    return (
        <section className="value-wrapper">
            <div className="paddings innerWidth flexCenter value-container">
                {/* left section */}
                <div className="value-left">
                    <div className="value-image-container">
                        <img src={changer[index]} alt="" /> {/* index for image */}
                    </div>
                </div>
                {/* Right section */}
                <div className="value-right flexColStart">
                    <span className="small-head-span">Our Value</span>
                    <span className="big-head-span">Value We Give To You</span>
                    <span className="right-small-text">We always ready to help by providijng the best services for you.<br />
                        We beleive a good blace to live can make your life better</span>

                    <Accordion preExpanded={[0]}>
                        {
                            data.map((item, i) => (
                                <AccordionItem key={i} uuid={i}>
                                    <AccordionItemHeading >
                                        <AccordionItemButton className="flexCenter accordion-button">
                                            <div className="flexCenter icon">{item.icon}</div>
                                            <span className="accordion-primary">{item.heading}</span>
                                            <div className="flexCenter icon"><MdArrowDropDown size={20} /></div>
                                        </AccordionItemButton>
                                    </AccordionItemHeading>
                                    <AccordionItemPanel>
                                        <p className="panel-text">{item.detail}</p>
                                    </AccordionItemPanel>
                                </AccordionItem>
                            ))
                        }

                    </Accordion>
                </div>
            </div>
        </section>
    )
}