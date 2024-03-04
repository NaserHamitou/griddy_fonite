export async function clickButton(element) {

  let obj = '';
  const cliclEvent = () => {
    console.log('click')
    callAPI().then((response) => {
      response.json().then((data) => {
        console.log(JSON.stringify(data))
        obj = JSON.stringify(data)
        if (obj.includes('Griddy') || obj.includes('griddy')) {
          element.style.backgroundColor = 'green';
          element.style.color = 'white';
          element.querySelector('h1').innerHTML = 'Griddy PRESENT 🥵💯🥵💯🥵💯🥵💯🥵💯';
          new Notification('Griddy PRESENT 🥵💯🥵💯🥵💯🥵💯🥵💯');
        }
      })
    })
    setTimeout(cliclEvent, 5000);
  }

  await Notification.requestPermission();
  cliclEvent()

}


export async function callAPI() {
  return await fetch('https://fortnite-api.com/v2/shop/br');
}