const groups = [
  {
    title: 'Appetizers',
    items: [
      [
        'fries.jfif',
        'French Fries',
        '79',
        'Crispy sa gawas,soft sa sulod.Kung ikaw ra isa ani,sure ko mag-order pa ka og isa.Perfect pang"chika-chika" snack.'
      ],
      [
        'chicknwings.jfif',
        'Chicken Wings (4pcs)',
        '129',
        'Juicy ug flavorful nga makalimot ka sa ngalan nimo Yeah.'
      ],
      [
        'rolls.jfif',
        'Spring Rolls',
        '99',
        'Crunchy nga kada paak satisfying kaayo.Gamay tan-awon pero kusog makabusog.'
      ],
      [
        'e16b5bb3-757d-47fb-9780-6abc3c208161.jfif',
        'Nachos with Cheese',
        '119',
        'Loaded with cheese nga murag dili kahibalo mohunong.Perfect pang barkada daghan mo mahurot ani.'
      ],
      [
        'lumpia.jfif',
        'Cheese Sticks',
        '109',
        'Strechy kaayo ang cheese,somuch '
      ]
    ]
  },
  {
    title: 'Main Courses',
    items: [
      [
        'chick.jfif',
        'Noak Special Fried Chicken',
        '169',
        'Crispy sa gawas,juicy sa sulod.'
      ],
      [
        'steak.jfif',
        'Pork BBQ with Rice',
        '149',
        'Sweet,smokey,ug sakto kaayo ang timpla.'
      ],
      [
        'egg.jfif',
        'Creamy Carbonara',
        '159',
        'Creamy kaayo somuch.'
      ],
      [
        'f18b05dd-6801-46b7-a6b2-34924693d4c5.jfif',
        'Noak Overload Burger',
        '179',
        'DAKO KAAYO juicy ug loaded.Dili ni pang shy type.'
      ],
      [
        'pastil.jfif',
        'Beef Tapa with Egg',
        '169',
        'Classic pero grabi kalami.'
      ]
    ]
  },
  {
    title: 'Desserts',
    items: [
      [
        'halo.png',
        'Halo-Halo Special',
        '119',
        'Syempre bugnaw colorful,perfect para sa init ug ulo.'
      ],
      [
        'choco.png',
        'Chocolate Moist Cake',
        '109',
        'Moist kaayo syempre.'
      ],
      [
        'icecrream.png',
        'Ice Cream Sundae',
        '89',
        'lami maka bugnaw.'
      ],
      [
        'leche.png',
        'Leche Flan',
        '79',
        'Creamy ug tam-is sakto lang.'
      ],
      [
        'ice.jfif',
        'Browine with Ice Cream',
        '120',
        'lami nga combo maka "wow".'
      ]
    ]
  }
]

const image = (file) =>
  `https://raw.githubusercontent.com/michelleandreagozum15-boop/Noak-Restaurant/main/img/${encodeURIComponent(file)}`

export default function Menu() {
  return (
    <main>
      <section className="menu page-section">
        <div className="container">
          <h1>OUR MENU!</h1>

          {groups.map((group) => (
            <div className="menu-section" key={group.title}>
              <h2>{group.title}</h2>

              <ul>
                {group.items.map(([img, dish, price, desc]) => (
                  <li key={dish}>
                    <img
                      src={image(img)}
                      alt={dish}
                      onError={(e) => {
                        e.currentTarget.style.visibility = 'hidden'
                      }}
                    />

                    <div className="details">
                      <div className="title-row">
                        <span className="dish">{dish}</span>
                        <span className="price">₱ {price}</span>
                      </div>

                      <p>{desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
