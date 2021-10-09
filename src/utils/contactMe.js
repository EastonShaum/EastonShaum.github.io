// $(function() 
// {
//     function after_form_submited(data)
//     {
//         if(data.result == 'success')
//         {
//             $('form#contact-form').hide();
//             $('#success-message').show();
//             $('#error-message').hide();
//         } else 
//         {
//             $('#error-message').append('<ul></ul>')

//             jQuery.each(data.errors, function(key,val)
//             {
//                 $('#error-message ul').append('<li>'+key+':'+val+'</li>')
//             });
//             $('#success-message').hide();
//             $('#error-message').show();


//         $('button[type="button"]', $form).each(function()
//             {
//                 $btn = $(this);
//                 label = $btn.prop('orig_label');
//                 if(label)
//                 {
//                     $btn.prop('type','submit' );
//                     $btn.text(label);
//                     $btn.prop('orig_label','');
//                 }
//             });

//         }//else
//     }

//     $('#contact-form').submit(function(e)
//     {
//         e.preventDefault();

//         $form = $(this)

//         $('button[type="sumbit"]', $form).each(function()
//         {
//             $btn = $(this);
//             $btn.prop('type', 'button' );
//             $btn.prop('orig_label', $btn.text());
//             $btn.text('Sending...')
//         });

//             $.ajax({
//                 type: "POST",
//                 url: 'handler.php',
//                 data: $form.serialize(),
//                 success: after_form_submited,
//                 dataType: 'json'
//             })
//     });
// })

// // const contactMe = () => {


// //     let formEl = document.getElementById("contact-form")
// //     function handleForm(event) { event.preventDefault(); }
// //     formEl.addEventListener('submit', handleForm);
// //     let submitBtnEl = document.getElementById("submitBtn")
// //     console.log(submitBtnEl)
// //     let emailEl = document.getElementById("contact-email")
// //     console.log(emailEl)
// //     // .addEventListener("click", function(event){
// //     //     event.preventDefault()
// //     //     let email = document.getElementById('contact-email')

// //     //     console.log(email)
// //     // });

// //     // const submitMessage = (event) => {
// //     //     event.preventDefault();
        
// //     // }


// //     // submitMessage()

// // }

// // module.exports = contactMe()