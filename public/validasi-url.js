function validasiUrl() {
  !localStorage.getItem("token") && (location.href = "/");
}

export async function fetch2(path) {
  return await fetch(path, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
  });
}
export async function fetch3(path, method, data) {
  return await fetch(path, {
    method: method,
    headers: {
      Authorization: `Bearer ${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
}
export default validasiUrl;
