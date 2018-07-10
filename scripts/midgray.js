//here we want to detect when our section enters the viewport
//when it does, we want to add a class od 'on-viewport', and
//when it exits we want to remove it again
inView('.section')
  .on('enter', section => {
    //classList.add is the same as jQuery's .addClass() method
    //but the vanilla JS version
    section.classList.add('in-viewport')
  })
  .on('exit', section => {
    section.classList.remove('in-viewport')
  })

//here we set the class to add only once we have scrolled 0.2 of
//our section into the viewport
inView.threshold(0.2)

// 1. whenever we click a .js-scroll link, we want to run a function
// 2. we want to stop the link from jumping straight to our section (its default behavior)
// 3. we want to find out the href attribute, and then grab that element
// 4. then scroll to it using scrollIntoView

const scrollLinks = document.querySelectorAll('.js-scroll')

scrollLinks.forEach(link => {

  //addEventListener is just the same as jQuery's .on()
  //we can listen for events on elements and then run a function
  link.addEventListener('click', (event) => {
    //using the event keyword we get access to a snapshot of what
    //happened when we clicked on our link

    //this is equivalent to return false in jQuery
    //it will block the behavior of the link jumping to
    //the href attribute
    event.preventDefault()

    //here we grab the href attribute from our link
    const href = link.getAttribute('href')
    console.log(href)
    //here we use the new scrollIntoView feature to scroll to
    //our desired elements in a smooh fashion
    document.querySelector(href).scrollIntoView({
      behavior: 'smooth'
    })

  })

})
