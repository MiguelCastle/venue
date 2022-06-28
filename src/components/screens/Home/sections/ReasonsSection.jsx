import React from "react";
// SVGS
import { ReactComponent as Balloons } from '../../../../assets/svgs/balloons.svg';
import { ReactComponent as Oven } from '../../../../assets/svgs/kitchen-cooker.svg';
import { ReactComponent as Mic } from '../../../../assets/svgs/microphone.svg';

const ReasonsSection = () => {
    return (
        <section className="reasons-section">
            <h2 className="lg-header">No - fuss event management to celebrate the big day</h2>
            <ul className="reasons-list">
                <li className='icon-title-descr'>
                    <Balloons/>
                    <h4>perfect venue</h4>
                    <p>No one will arrange a better party or event than we</p>
                    <button>LEARN MORE</button>
                </li>
                <li className='icon-title-descr'>
                    <Oven/>
                    <h4>A Fully Furnanced Kitchen</h4>
                    <p>A kitchen to keep the food warm ready to serve</p>
                    <button>LEARN MORE</button>
                </li>
                <li className='icon-title-descr'>
                    <Mic/>
                    <h4>Designated Stage</h4>
                    <p>A designed raised seciton of the floor perfect for a live performance</p>
                    <button>LEARN MORE</button>
                </li>
            </ul>
        </section>
    )
}
export default ReasonsSection;