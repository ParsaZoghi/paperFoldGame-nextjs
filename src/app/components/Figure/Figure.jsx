import Image from 'next/image'

import './Figure.scss'

export default function Figure({ states }) {
  return (
    <figure>
      {states.isLoading ? (
        <div className="skeleton skeleton-img"></div>
      ) : (
        <Image
          src={`/assets/img/${states.curFold.imgPath}`}
          alt={states.curFold.imgPath.replace(/^\d+-/, '').replace(/\.[^.]+$/, '')}
          priority={true}
          width={282}
          height={300}
          sizes="(max-width: 768px) 100%, 750px"
        />
      )}
    </figure>
  )
}
