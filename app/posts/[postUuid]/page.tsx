import getPostByUuid from "@/lib/getPostByUuid";

type Params = {
  params: {
    postUuid: string
  }
}

export default async function PostPage({ params }: Params) {
  const post: Post = await getPostByUuid(params.postUuid);

  return (
    <article>
      <header className="sm:flex
      md:flex-row
      justify-between font-bold
      "
      >
      <div className="font-bold
        text-xl
        md:text-3xl
        "
        >
        <div className="flex items-center">
          <h4 className="rounded-md drop-shadow-sm">{post.title}</h4>
          <div className="rounded-md text-xs ml-4 px-2 py-1 text-gray-500">
            <p>proyecto.Estado</p>
          </div>
        </div>
        <hr className="my-1 border-4 border-celestucho"></hr>
        <div className="flex items-end justify-end">
          <h4 className="text-right text-xs italic font-normal my-2 text-gris">{post.createdAt}</h4>
          <h4 className="text-right text-xs italic font-normal my-2 text-gris">{post.updatedAt}</h4>
        </div>
      </div>
      </header>
      <section>
        <p>{post.content}</p>
      </section>
      <footer>proyecto.stack</footer>
    </article>
  );
}
