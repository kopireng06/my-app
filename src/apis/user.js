export const fetchUsers = async (page) => {
  fetch(`https://www.mecallapi.com/api/attractions?page=${page}`).then((res) => res.json())
}
