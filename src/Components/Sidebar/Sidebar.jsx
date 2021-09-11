import React from 'react'
import './sidebar.css'
import {Person, Work, Notifications, Chat, Build, Feedback, Help, Loyalty} from "@material-ui/icons"

export default function Sidebar() {
    return (
        <div className="Container">
        <div className="Sidebar">
            <li>
                <Person className="sidebarIcons"/>Profile</li>
            <li>
            <Work className="sidebarIcons"/>Work</li>
            <li>
            <Chat className="sidebarIcons"/>Chat</li>
            <li>
            <Loyalty className="sidebarIcons"/>Achievements</li>
            <li>
            <Notifications className="sidebarIcons"/>Notifications</li>
            <li>
            <Build className="sidebarIcons"/>Tools</li>
            <li>
            <Help className="sidebarIcons"/>Help</li>
            <li>
            <Feedback className="sidebarIcons"/>Send feedback</li>
           
            
            
        </div>
        <div className="Content">
             <h1>Introduction to website</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias hic quisquam mollitia quia aliquam animi, aspernatur eaque! Numquam nostrum sint eveniet odit corporis adipisci repudiandae velit magni, ab eligendi. Odio? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iusto voluptatum veniam neque?</p>

        <h1>Another title</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa officiis, optio vitae dolore molestiae repellat vero architecto voluptatibus dolorem earum, dolor impedit natus perspiciatis adipisci magni nemo sed quidem perferendis aliquid necessitatibus velit quisquam explicabo inventore eveniet. Optio iusto minima quibusdam nisi at officiis enim aperiam a, repellendus, impedit eaque illum qui voluptas! Hic est, eveniet, aliquid rerum molestiae possimus minima voluptate, vel ex deleniti soluta libero dolore perferendis dignissimos adipisci? Fuga, rem impedit in iusto quae illum exercitationem recusandae veritatis laboriosam ab amet sequi deserunt ut ipsum! Praesentium, magnam! Quisquam aut eveniet, vel, expedita id hic quis in laudantium voluptatem non, illo sequi. Illo distinctio error cumque facere sunt possimus dignissimos minus, in eum modi, nam incidunt itaque neque consequuntur voluptatibus nemo deserunt ad corporis excepturi eveniet eligendi, quo culpa accusamus. Maiores accusantium officiis labore temporibus illo earum aliquam illum? Hic quo nostrum iusto quis doloremque accusantium asperiores laboriosam!</p>

        <h1>Last page title</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium consequatur facilis unde aut, laborum nesciunt excepturi rem veniam fugiat ipsam distinctio voluptatem, eos ut, vitae sed officiis quo voluptatum ad deleniti. Exercitationem architecto quam illo cum. Excepturi deleniti ipsum nesciunt, culpa pariatur expedita harum ipsam odit. Tenetur dolores praesentium voluptatum corporis explicabo rerum qui enim fuga neque expedita deserunt, inventore repellendus assumenda repudiandae tempore illum quibusdam optio iusto maxime consequuntur quasi voluptates totam eaque aperiam. Quasi maxime quia pariatur, dignissimos quibusdam possimus ducimus, quo nesciunt veritatis, repellat iure. Explicabo recusandae eaque deleniti necessitatibus in delectus accusamus ut quas sed repellat.</p>
    
        <h1>Last page title</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium consequatur facilis unde aut, laborum nesciunt excepturi rem veniam fugiat ipsam distinctio voluptatem, eos ut, vitae sed officiis quo voluptatum ad deleniti. Exercitationem architecto quam illo cum. Excepturi deleniti ipsum nesciunt, culpa pariatur expedita harum ipsam odit. Tenetur dolores praesentium voluptatum corporis explicabo rerum qui enim fuga neque expedita deserunt, inventore repellendus assumenda repudiandae tempore illum quibusdam optio iusto maxime consequuntur quasi voluptates totam eaque aperiam. Quasi maxime quia pariatur, dignissimos quibusdam possimus ducimus, quo nesciunt veritatis, repellat iure. Explicabo recusandae eaque deleniti necessitatibus in delectus accusamus ut quas sed repellat.</p>
    


        </div>
        </div>
    )
}
