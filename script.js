const imageArray = [
    "https://i.pinimg.com/564x/e8/f7/a3/e8f7a39d3f74c3514355850e4b9dc24b.jpg",
    "https://i.pinimg.com/236x/9d/0e/25/9d0e25cbb10603e6748b011c38b03c01.jpg",
    "https://i.pinimg.com/236x/59/e4/aa/59e4aa928860dd9cdb93ab6670484027.jpg",
    "https://i.pinimg.com/236x/01/51/27/01512766c52ede0d086326c16a74c303.jpg",
    "https://i.pinimg.com/236x/86/58/09/8658091859a8715b8daacc24bbcb4f21.jpg",
    "https://i.pinimg.com/236x/6c/b4/88/6cb48813dc6459820d6195699cfbc877.jpg",
    "https://i.pinimg.com/236x/3e/55/21/3e55216dbcb6c291f8b45abf860aa722.jpg",
    "https://i.pinimg.com/236x/22/f9/ec/22f9ecfa41b3d7e109b0f14710c359c0.jpg",
    "https://i.pinimg.com/236x/22/f9/ec/22f9ecfa41b3d7e109b0f14710c359c0.jpg",
    "https://i.pinimg.com/236x/22/f9/ec/22f9ecfa41b3d7e109b0f14710c359c0.jpg",
    "https://i.pinimg.com/236x/62/d1/83/62d183d2e57d6186a573304445494cb7.jpg",
    "https://i.pinimg.com/236x/33/6b/2b/336b2b74b660615868d1e9fc8608e0d4.jpg",
    "https://i.pinimg.com/236x/21/13/2d/21132d574db132dafc7750f19a5fe3e1.jpg",
    "https://i.pinimg.com/236x/5a/86/11/5a86112729d1b19b60972e204eb94575.jpg",
    "https://i.pinimg.com/236x/73/01/94/7301949b8d7bb16551fa036883d4cf46.jpg",
    "https://i.pinimg.com/236x/80/78/a7/8078a70370f66e82d1749a7dab1de9ea.jpg",
    "https://i.pinimg.com/236x/42/dd/6b/42dd6bb0164321ac4f2c02a37c3f46a7.jpg",
    "https://i.pinimg.com/236x/de/c2/51/dec251a97fa4b75d91f96df257b0c717.jpg",
    "https://i.pinimg.com/236x/eb/cf/ea/ebcfea43302ae9c1157344931a99caa1.jpg",
    "https://i.pinimg.com/236x/32/1c/12/321c127b99488100aea5ef7413a1c615.jpg",
    "https://i.pinimg.com/236x/85/4c/b8/854cb88afa417dcd5a3bc42846fc5301.jpg",
    "https://i.pinimg.com/236x/34/66/8d/34668d3ffd53204920e66697c355f63d.jpg",
    "https://i.pinimg.com/236x/7c/71/b2/7c71b20b3cc533235ce9bc9b25b999b2.jpg",
    "https://i.pinimg.com/236x/05/2a/df/052adf4b80535a5c4d50a199b29d4530.jpg",
    "https://i.pinimg.com/236x/ea/25/52/ea255232813f1b5fbe7b68e955b7c3bd.jpg",
    "https://i.pinimg.com/236x/fb/2c/c7/fb2cc729188d2f00ccfa8dae40846be4.jpg",
    "https://i.pinimg.com/236x/19/a3/e7/19a3e73a1a56e5156a34ac56a0ab7102.jpg",
];

function generateRandomImage() {
// Dapatkan indeks acak dari imageArray
    const randomIndex = Math.floor(Math.random() * imageArray.length);

// Dapatkan elemen gambar
    const imageElement = document.getElementById('randomImage');

// Tetapkan atribut src elemen gambar dengan URL gambar yang dipilih secara acak
    imageElement.src = imageArray[randomIndex];
}
