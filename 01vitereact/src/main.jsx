
import ReactDOM from 'react-dom/client'



// function MyApp() {
//   return (
//     <div>
//       <h1>This is an h3 tag from MyApp</h1>
//     </div>
//   )
// }


const reactElement = React.createElement(
  'a', 
  {href: 'https://youtube.com', target: '_blank'},
  'click me to youtube',
)

ReactDOM.createRoot(document.getElementById('root')).render(
 
  reactElement
)
