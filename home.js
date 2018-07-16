var text=function(){return HomeData[Locale]},raffleText=function(){return HomeRaffleData[Locale]},imageUrl=ImageSource+"/home/image/";function ShowCase(e){return React.createElement("section",{id:"showcase",className:"showcase background-blue text-white"},React.createElement("div",{className:"video"},React.createElement("iframe",{src:"https://www.youtube.com/embed/V0FtjeFV1tg",frameBorder:"0"})),React.createElement("div",{className:"text"},React.createElement("h1",null,text().showcase.title),React.createElement("div",null,React.createElement("p",{className:"animateOne animated zoomIn"},text().showcase.content),React.createElement(Button,{size:"small",href:"#chat",className:"text-white"},text().showcase.button))))}function AboutCard(e){var t=e.data;return React.createElement("div",{className:"item background-green about-card"},React.createElement(Card,null,React.createElement(CardMedia,{className:"itemMedia",image:imageUrl+t.image,title:t.title}),React.createElement(CardContent,null,React.createElement(Typography,{gutterBottom:!0,variant:"headline",component:"h2"},t.title),React.createElement(Typography,{component:"p"},t.content)),React.createElement(CardActions,null)))}function About(e){var t=text().about.data.map((e,t)=>React.createElement(AboutCard,{key:t,data:e}));return React.createElement("section",{id:"about",className:""},React.createElement("h1",null,text().about.title),React.createElement("div",{className:"itemList"},t))}function CreatorCard(e){var t=e.data;return React.createElement("div",{className:"smallItem creator-card"},React.createElement(Card,null,React.createElement(CardHeader,{avatar:React.createElement(Avatar,{"aria-label":"Recipe",src:t.avatar}),title:t.title,subheader:t.profession}),React.createElement(CardContent,null,React.createElement(Typography,{gutterBottom:!0,variant:"headline",component:"h2"},t.name),React.createElement(Typography,{component:"p"},t.content)),React.createElement(CardActions,null,React.createElement(IconButton,{href:t.linkedin,target:"_blank"},React.createElement(LinkedinIcon,null)),React.createElement(IconButton,{href:"mailto:"+t.email,alt:t.email},React.createElement(ContactMailIcon,null)))))}function Creator(e){var t=text().creator.data.map((e,t)=>React.createElement(CreatorCard,{key:t,data:e}));return React.createElement("section",{id:"creator",className:"background-green text-white"},React.createElement("h1",null,text().creator.title),React.createElement("div",{className:"itemList"},t))}function FunctionCard(e){var t=e.data;return React.createElement("div",{className:"item background-blue function-card"},React.createElement(Card,null,React.createElement(CardMedia,{src:""},React.createElement("div",{className:"card-video"},React.createElement("iframe",{src:t.video,frameBorder:"0"}))),React.createElement(CardContent,null,React.createElement(Typography,{gutterBottom:!0,variant:"headline",component:"h2"},t.title),React.createElement(Typography,{component:"p"},t.content)),React.createElement(CardActions,null)))}function Function(e){var t=text().function.data.map((e,t)=>React.createElement(FunctionCard,{key:t,data:e}));return React.createElement("section",{id:"function",className:""},React.createElement("h1",null,text().function.title),React.createElement("div",{className:"itemList"},t))}class Chat extends React.Component{constructor(e){super(e),this.state=Channels[0]}changeIframe(e){this.setState(Channels[e])}render(){const e=Channels.map((e,t)=>React.createElement(Button,{key:t,onClick:()=>this.changeIframe(t),label:e.name},e.icon));return React.createElement("section",{id:"chat",className:"background-blue text-white"},React.createElement("h1",null),React.createElement("div",{className:"chat-channels"},e),React.createElement("h1",null),React.createElement("div",{className:"chat"},React.createElement("h2",{id:"chatTitle",className:"chat-title background-blue"},this.state.name),React.createElement("div",{id:"chatContent"},React.createElement(Button,{target:"_blank",href:this.state.url,className:"chat-connect-button",size:"large",color:"primary"},React.createElement(SendIcon,null)))))}}function Footer(e){var t=text().footer;return React.createElement("section",{id:"footer",className:"footer background-green text-white"},React.createElement("p",null,t.mail),React.createElement("p",null,t.phone),React.createElement("p",null,t.content),React.createElement("p",null,t.company))}class WorldCupModal extends React.Component{constructor(e){super(e),this.state={open:!0,locale:Locale}}handleOpen(){this.setState({open:!0})}handleClose(){this.setState({open:!1})}render(){var e=raffleText();return React.createElement(Modal,{className:"modal","aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",open:this.state.open,onClose:()=>{this.handleClose()}},React.createElement("div",{className:"modal-content"},React.createElement(CardMedia,{className:"modal-media",image:"https://almacenbot.blob.core.windows.net/imagenesequipos-selecciones/Camisetas%20Mundial.gif"}),React.createElement("div",null,React.createElement(Typography,{gutterBottom:!0,variant:"headline",component:"h2"},e.title),React.createElement(Typography,{variant:"subheading"},e.subTitle),React.createElement(Typography,{variant:"subheading",id:"simple-modal-description"},React.createElement("p",null,e.p1,React.createElement("a",{href:"https://www.facebook.com/SticoBot",target:"_blank"},e.p1a)),React.createElement("p",null,e.p2),React.createElement("p",null,e.p3),React.createElement("p",null,e.p4),React.createElement("p",null,e.p5),React.createElement("a",{href:"raffle.html"},e.pa)))))}}class Home extends React.Component{constructor(e){super(e),this.state={locale:Locale}}render(){return React.createElement("div",null,React.createElement(ShowCase,null),React.createElement(Function,null),React.createElement(About,null),React.createElement(Creator,null),React.createElement(Chat,null),React.createElement(Footer,null))}}window.onload=function(){ReactDOM.render(React.createElement(Page,{title:text().title},React.createElement(Home,null)),document.getElementById("page"))};