export const Pagination = ({page, setPage}) => {

  console.log(page, setPage)

  const handlePreviousPage = () => {
    page > 1 ? setPage(page - 1) : setPage(1)
  }

  const handleNextPage = () => {
    setPage(page +1)
  }

  return (
    <div class="container mb-10 mt-4" role="group">
      <button type="button" onClick={handlePreviousPage} class="btn-previous">
        <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="16" 
        height="16" 
        fill="currentColor" 
        class="bi bi-skip-backward-fill" 
        viewBox="0 0 16 16"
        > 
          <path d="M.5 3.5A.5.5 0 0 0 0 4v8a.5.5 0 0 0 1 0V8.753l6.267 3.636c.54.313 1.233-.066 1.233-.697v-2.94l6.267 3.636c.54.314 1.233-.065 1.233-.696V4.308c0-.63-.693-1.01-1.233-.696L8.5 7.248v-2.94c0-.63-.692-1.01-1.233-.696L1 7.248V4a.5.5 0 0 0-.5-.5z"/> 
        </svg>
      </button>
      <button type="button" class="btn-middle">
        {page}
      </button>
      <button type="button" onClick={handleNextPage} class="btn-next">
        <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="16" 
        height="16" 
        fill="currentColor" 
        class="bi bi-skip-forward-fill" 
        viewBox="0 0 16 16"
        > 
          <path d="M15.5 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V8.753l-6.267 3.636c-.54.313-1.233-.066-1.233-.697v-2.94l-6.267 3.636C.693 12.703 0 12.324 0 11.693V4.308c0-.63.693-1.01 1.233-.696L7.5 7.248v-2.94c0-.63.693-1.01 1.233-.696L15 7.248V4a.5.5 0 0 1 .5-.5z"/> 
        </svg>
      </button>
    </div>
  )

}