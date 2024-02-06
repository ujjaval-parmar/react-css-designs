import React, { useState } from 'react'

const TeamCardsArr = [
    {
        id: '1',
        name: 'Nick Smith',
        img: 'team-member-1.jpg',

    },
    {
        id: '2',
        name: 'Bob Brown ',
        img: 'team-member-2.jpg',

    },
    {
        id: '3',
        name: 'Smith Nick',
        img: 'team-member-3.jpg',
    }
]

const TeamCards = () => {

    const [isStory, setIsSotry] = useState([]);

    
    const handleStory = e =>{
        if(!e.target.className.includes('story-btn')) return;
        // console.dir( e.target);

        setIsSotry(curVal=> {
            if(curVal.includes(e.target.id)){
                return curVal.filter(val=> val !== e.target.id);
            }

            return [...curVal, e.target.id];
        })
    }

    console.log(isStory);
    
    return (
        <section className='section-3'>
            <h1 className='section-heading'>TEAM</h1>
            
            <div className="team-wrapper" onClick={handleStory}>

                {TeamCardsArr.map(teamCard=>{ 
                    
                    // console.log(teamCard);
                    return(<div className='team-member ' key={teamCard.id} >
                    <img src={"/images/"+ teamCard.img} alt="team" />
                    <h2 className="team-member-name">{teamCard.name} <span>(Designer)</span></h2>
                    <ul className="team-member-skills">
                        <li>Ps</li>
                        <li>Figma</li>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>Ai</li>
                    </ul>

                    <a href="" className="projects-btn">Projects</a>

                    <div className="story-btn" title='My Story' id={teamCard.id}>
                        <div className={`story-btn-line ${isStory.includes(teamCard.id) ? 'change' : ''}`}></div>
                    </div>
                    
                    <div className={`story ${isStory.includes(teamCard.id) ? 'change' : ''}`}>
                        <h4 className={`story-heading `}>About me</h4>
                        <p className='story-paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque illo suscipit aspernatur reprehenderit eius. Est eos optio laborum autem cum facere perferendis, culpa placeat mollitia iusto impedit id nemo rem voluptatem quidem, veniam itaque odit, necessitatibus ab sed officiis nostrum.</p>
                    </div>


                </div>
                )})}

                {/* <div className="team-member">
                    <img src="/images/team-member-2.jpg" alt="team" />
                    <h2 className="team-member-name">Bob Brown <span>(Designer)</span></h2>
                    <ul className="team-member-skills">
                        <li>Ps</li>
                        <li>Figma</li>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>Ai</li>
                    </ul>

                    <a href="" className="projects-btn">Projects</a>

                    <div className="story-btn" title='My Story'>
                        <div className="story-btn-line"></div>
                    </div>
                    
                    <div className="story">
                        <h4 className="story-heading">About me</h4>
                        <p className='story-paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque illo suscipit aspernatur reprehenderit eius. Est eos optio laborum autem cum facere perferendis, culpa placeat mollitia iusto impedit id nemo rem voluptatem quidem, veniam itaque odit, necessitatibus ab sed officiis nostrum.</p>
                    </div>


                </div>

                <div className="team-member">
                    <img src="/images/team-member-3.jpg" alt="team" />
                    <h2 className="team-member-name">Smith Nick <span>(Designer)</span></h2>
                    <ul className="team-member-skills">
                        <li>Ps</li>
                        <li>Figma</li>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>Ai</li>
                    </ul>

                    <a href="" className="projects-btn">Projects</a>

                    <div className="story-btn" title='My Story'>
                        <div className="story-btn-line"></div>
                    </div>

                    <div className="story">
                        <h4 className="story-heading">About me</h4>
                        <p className='story-paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque illo suscipit aspernatur reprehenderit eius. Est eos optio laborum autem cum facere perferendis, culpa placeat mollitia iusto impedit id nemo rem voluptatem quidem, veniam itaque odit, necessitatibus ab sed officiis nostrum.</p>
                    </div>


                </div> */}


            </div>
        </section>
    )
}

export default TeamCards;