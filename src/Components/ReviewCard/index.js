import { star } from "../../Services/icons"

export const ReviewCard = ({props}) => {

  const content = props.content.slice(0,250)

  return (
    <div class="w-[350px] px-1 my-1">
      <h3 class="bg-primary rounded-t text-center py-1" >{props.author}</h3>
      <div class="border border-primary flex flex-col justify-center p-3">
      <div class="flex">
        <icon class="mt-1 mr-2">{star}</icon> 
        <h5>{props.author_details.rating === null ? `No rate provided` : `Rating: ${props.author_details.rating}`} </h5>
      </div>
        <p class="h-40">{content}...</p>
        <a class="button-primary mb-5 mx-auto w-[120px]" href={props.url} target="_blank" rel="noreferrer">Full Review</a>
      </div>
    </div>
  )

}