const Book = (props) => {
  const { imgSource, imgTitle, title, author, number } = props

  return (
    <article className='book'>
      <img src={imgSource} alt={imgTitle} />
      <h2>{title}</h2>
      <h4> {author}</h4>
      <div className='number_parent'>
        <span className='number'>{`#${number + 1} `}</span>
        <div className='carret'></div>
      </div>
    </article>
  )
}
export default Book
