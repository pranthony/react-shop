import { Component } from "react";

const details = [
    {
    name: 'Tiger',
    number: 3890,
    endangered: true,
    photo: 'https://source.unsplash.com/2zYHKx8jtvU/200x100',
    donation: 100
    },
    {
    name: 'Brown Bear',
    number: 200000,
    endangered: false,
    photo: 'https://source.unsplash.com/c8XlAc1akIU/200x100',
    donation:10
    },
    {
    name: 'Red Panda',
    number: 10000,
    endangered: true,
    photo: 'https://source.unsplash.com/2zYHKx8jtvU/200x100',
    donation: 50
    }
];
const Photo = ({path, name})=>{
    return(
        <img src={path} alt={name}/>
    )
}
const DetailAnimal = (props)=>{
    const {name, number, endangered, donation} = props.detail
    return (
        <li >
            {props.image}
            <h1>Name: {name}</h1>
            <i>Number: {number}</i>
            <p>Peligro: {endangered?"YES":"NOT"}</p>
            <p style={{color: props.donationColor}}>Donation: ${donation}</p>
        </li>
    )
}
const Animal = (props)=>{
    const details = props.details  
    return (
        <ul>
            {props.children}
            {details.map((detail, index)=>{
               return <WrapperComponent 
                        key={index}
                        donationAmount={detail.donation}
                        render={({donationColor})=>{
                            <DetailAnimal
                                donationColor={donationColor}
                                image={<Photo path={detail.photo} name={detail.name}/>}
                                detail={detail}
                                key={index}
                            />
                        }}
                    />
            })}
                
        </ul>
    )
}
const whithDonationColor = WrapperComponent=>{
    return class extends Component{
        constructor(props){
            super(props)
            this.state =  {donationColor: 'black'}
        }
        componentDidMount(){
            const donationAmount = this.props.detail.donation;
            const donationColor = donationAmount>50?'green':'red';
            this.setState({donationColor})
        }
        render(){
            return <WrapperComponent {...this.props} donationColor={this.state.donationColor}/>
        }
    }
}
const WrapperComponent = whithDonationColor(DetailAnimal);

const Animals = ()=>{
    return(
        <div>
            <Animal details={details}>
               <h1>Animales</h1> 
            </Animal>
        </div>
    )
}

export {Animals}