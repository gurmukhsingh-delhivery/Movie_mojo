import { useRouter } from 'next/router';
import movies from '../../data/movies'

const Post = (props) => {
  const router = useRouter();
  let { id } = router.query;

  id  = parseInt(id);
  const card = props.data[id]

  console.log(card)
  return (
    <div>
      <h1 className="text-2xl font-medium mb-2">{card.title}</h1>
      <p className="text-gray-700">{card.genre}</p>
    </div>
  )
}


Post.getInitialProps = async function(context){
  const data = movies
  return {data}
}

export default Post;