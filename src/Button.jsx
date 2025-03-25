
const Button = ({onClick, text}) => {
    return (
      <button onClick={onClick}>
        {text}
      </button>
    )
  }

// const Button = (props) => {
//     return (
//       <button onClick={props.onClick}>
//         {props.text}
//       </button>
//     )
//   }

export default Button