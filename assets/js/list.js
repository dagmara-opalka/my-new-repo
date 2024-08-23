const list = [
    {
        id: 1,
        parentId: null,
        text: 'Zastosowanie',
        link: '#Zastosowanie',
    },
    {
        id: 44,
        parentId: null,
        text: 'Historia',
        link: '#Historia',
    },
    {
        id: 7,
        parentId: 44,
        text: 'Dialekty',
        link: '#Dialekty',
    },
    {
        id: 31,
        parentId: 44,
        text: 'Java',
        link: '#Java',
    },
    {
        id: 24,
        parentId: null,
        text: 'JavaScript dla WWW',
        link: '#JavaScript_dla_WWW',

    },
    {
        id: 10,
        parentId: 24,
        text: 'Interakcja',
        link: '#Interakcja'
    },
    {
        id: 25,
        parentId: 24,
        text: 'Osadzanie',
        link: '#Osadzanie',
    }
];

document.addEventListener("DOMContentLoaded", function() {
    const list = [
        { id: 1, parentId: null, text: 'Zastosowanie', link: '#Zastosowanie' },
        { id: 44, parentId: null, text: 'Historia', link: '#Historia' },
        { id: 7, parentId: 44, text: 'Dialekty', link: '#Dialekty' },
        { id: 31, parentId: 44, text: 'Java', link: '#Java' },
        { id: 24, parentId: null, text: 'JavaScript dla WWW', link: '#JavaScript_dla_WWW' },
        { id: 10, parentId: 24, text: 'Interakcja', link: '#Interakcja' },
        { id: 25, parentId: 24, text: 'Osadzanie', link: '#Osadzanie' }
    ];

    function generateList(list, parentId = null) {
        const ul = document.createElement('ul');

        list
            .filter(item => item.parentId === parentId)
            .forEach(item => {
                const li = document.createElement('li');
                li.dataset.id = item.id;

                const a = document.createElement('a');
                a.href = item.link;
                a.textContent = item.text;

                li.appendChild(a);

                const children = list.filter(child => child.parentId === item.id);
                if (children.length > 0) {
                    li.appendChild(generateList(list, item.id));
                }

                ul.appendChild(li);
            });

        return ul;
    }

    const articleList = document.querySelector('.article__list');
    articleList.appendChild(generateList(list));
});