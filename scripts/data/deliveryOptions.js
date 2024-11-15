import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js';


export function calculateDeliveryDate(deliveryOption){

  let deliveryDate = dayjs();
  let remainingDays = deliveryOption.deliveryDays;

  while (remainingDays > 0) {
    deliveryDate = deliveryDate.add(1, 'day');

    if (!isWeekend(deliveryDate)) {
      remainingDays--;
      // This is a shortcut for:
      // remainingDays = remainingDays - 1;
    }
  }

  const dateString = deliveryDate.format(
    'dddd, MMMM D'
  );


  return dateString;

}

export function getTodayDate(){

  return dayjs().format(('MMMM D'))
}

function isWeekend(date) {

  const dayOfWeek = date.format('dddd');
  return dayOfWeek === 'Saturday' || dayOfWeek === 'Sunday';

}



export function getDeliveryOption(deliveryOptionId){

    let deliveryOption;

    deliveryOptions.forEach((option) =>{

      if(option.id === deliveryOptionId){

        deliveryOption = option;
      }
    })

    return deliveryOption || deliveryOptions[0];
}

export const deliveryOptions = [{

    id: '1',
    deliveryDays : 7,
    priceCents : 0
},
{
    id: '2',
    deliveryDays: 3,
    priceCents: 499
},
{
    id: '3',
    deliveryDays: 1,
    priceCents: 999
}
];