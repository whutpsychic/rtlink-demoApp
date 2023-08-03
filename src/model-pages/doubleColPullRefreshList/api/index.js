const api = {}

let num = 0

api.getItems = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      num++

      let arr = [
        { title: `标题${num}-1`, content: "一些内容", date: "2023-01-01" },
        { title: `标题${num}-2`, content: "一些内容", date: "2023-01-01" },
        { title: `标题${num}-3`, content: "一些内容", date: "2023-01-01" },
        { title: `标题${num}-4`, content: "一些内容", date: "2023-01-01" },
        { title: `标题${num}-5`, content: "一些内容", date: "2023-01-01" },
        { title: `标题${num}-6`, content: "一些内容", date: "2023-01-01" },
        { title: `标题${num}-7`, content: "一些内容", date: "2023-01-01" },
      ]

      let r = Math.random() * 10 > 3
    
      if (r) {
        resolve(arr)
      } else {
        resolve([])
      }
    }, 1000)
  })
}

export default api