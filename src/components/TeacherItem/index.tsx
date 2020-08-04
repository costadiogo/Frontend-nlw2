import React from 'react';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                
                <img src="https://avatars0.githubusercontent.com/u/62573994?s=460&u=876fa58f6a433c6a3caf2fc253b88b71c2800590&v=4" alt="Diogo Costa" />
                <div>
                    <strong>Diogo Costa</strong>
                    <span>Physical</span>
                </div>
            </header>

            <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et lectus condimentum, efficitur lacus id, elementum est.
                <br /><br />
                Curabitur a laoreet erat, quis tempor turpis. Vestibulum sed urna sed orci tristique porttitor eget ut felis. Morbi ullamcorper mattis augue, eu efficitur tellus tristique ut. 
            </p>

            <footer>
                <p>
                    Price/houer
                    <strong>U$ 10,00</strong>
                </p>

                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp" />
                    Call me
                </button>
            </footer>
        </article>
    );
}

export default TeacherItem;