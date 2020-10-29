import React from 'react';
import Header from '../../componentes/header';
import '../../assets/style/global.css';
import './style.css';
import Footer from '../../componentes/footer';

function Home(){
    return(
        <div>
            <Header title="!"/>
            <div className="central-container">
            <h1>Eventos</h1>
            <div className="container-home">
                <div className="text-container-home">
                    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed, nemo harum eius, laboriosam soluta perferendis vero asperiores illo! Nam ex veritatis amet magni!</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo nostrum, esse ex reiciendis mollitia dolores ab quod, magnam quidem corporis quia recusandae qui? Eos nam sed commodi nisi distinctio explicabo.
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam natus in, harum ullam eius dolore deleniti tempore hic asperiores repudiandae autem commodi sunt rerum molestias dolores aperiam tenetur distinctio labore.
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Accusamus, adipisci. Doloremque saepe, ea amet in inventore recusandae ducimus eius praesentium, tempore et fugit sit adipisci animi ullam neque blanditiis laboriosam!
                    </p>
                </div>
                <div className="text-container-home">
                    <h3>Eventos</h3>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci sed quas voluptates, ipsam odio commodi, facere nam sequi quis eius, placeat modi rem cupiditate doloribus ea nihil quae consequuntur excepturi.
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti, laborum. Delectus similique animi molestiae cum cumque laboriosam officia ullam recusandae illum fuga suscipit magni dolore libero, incidunt adipisci error iste?
                </p>
                </div>
            </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Home;