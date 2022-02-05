import React from 'react';
import multiplePizzas from '../assets/multiplePizzas.jpeg'
import "../styles/About.css"

function About(props) {
    return (
        <div className="about">
            <div className="aboutTop" style={{backgroundImage: `url(${multiplePizzas})`}}>
            </div>
            <div className="aboutBottom">
                <h1>ABOUT US</h1>
                <p><span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab doloribus error, laboriosam officiis praesentium qui similique? Commodi, error explicabo facilis impedit iure magni perspiciatis placeat possimus quam quis tempora, voluptatibus.</span><span>Ad alias architecto atque consequatur debitis ducimus, earum eos fugit harum ipsa labore laboriosam magni nam officia officiis ratione saepe. Et eum expedita laudantium, nihil omnis quo quod recusandae rem!</span><span>Ab distinctio eligendi officiis quisquam vero. Earum est, et eveniet facilis nam numquam ratione rerum unde! Adipisci assumenda autem beatae consequuntur, eligendi expedita iure labore nam, natus possimus quae rerum!</span><span>Aliquid beatae dignissimos doloribus, eos error eum eveniet expedita fugit, harum impedit ipsum laborum maiores minus nisi non pariatur praesentium quae quam quas quibusdam quo, sed sequi suscipit ullam unde!</span><span>Aut blanditiis corporis cupiditate deserunt dolore eius error, eveniet, ex iste laboriosam natus obcaecati reiciendis suscipit ut, vitae! Accusamus culpa, dolorum id ipsam minima placeat porro quae quam tempora veritatis.</span><span>Asperiores aut dolores, eaque et in necessitatibus non quaerat soluta? Accusamus adipisci consectetur, dicta distinctio doloremque, eum ipsa itaque iusto libero natus nihil nisi omnis optio repellat saepe vel veniam.</span><span>A, adipisci alias animi aperiam aspernatur distinctio dolor eaque est fugiat iusto molestias nesciunt obcaecati odit, quia quo repellat sequi similique voluptatem. Corporis earum eum fuga laudantium nesciunt, quis voluptate.</span><span>Architecto eos perferendis quasi vel? Asperiores atque, delectus ea eum id impedit laboriosam nulla perspiciatis quam recusandae reprehenderit saepe sed tempora. Adipisci commodi exercitationem fuga fugiat nisi nulla quaerat suscipit?</span><span>Ab aperiam consequatur deleniti dignissimos exercitationem facilis fuga illum iste natus odit, omnis optio pariatur placeat rerum sed suscipit temporibus. Minus natus necessitatibus rem repudiandae tempora? Aspernatur doloribus laboriosam repellendus.</span>
                </p>
            </div>
        </div>
    );
}

export default About;