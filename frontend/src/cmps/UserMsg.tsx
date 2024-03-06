// import React, { useState, useEffect } from 'react'
// import {
//   eventBusService,
//   showErrorMsg,
//   showSuccessMsg,
// } from '../services/event-bus.service'
// import { socketService } from '../services/socket.service'
// import SvgIcon from './SvgIcon'

// interface Message {
//   title: string
//   body: string
//   type: 'success' | 'error'
//   styles?: {
//     userMsgLeft?: string
//     messageAreaPadding?: string
//     msgStatusTranslateX?: string
//   }
// }

// export function UserMsg(): JSX.Element {
//   const [msg, setMsg] = useState<Message | null>(null)
//   const [isActive, setIsActive] = useState<boolean>(false)
//   const [isSlidingOut, setIsSlidingOut] = useState<boolean>(false)

//   useEffect(() => {
//     const unsubscribe = eventBusService.on('show-user-msg', (data: Message) => {
//       const { title, body, type, styles } = data
//       setMsg({ title, body, type, styles })

//       setIsActive(true)
//       setTimeout(() => {
//         setIsActive(false)
//         setIsSlidingOut(true)
//         setTimeout(onCloseMsg, 500)
//       }, 5000)
//     })

//     return () => {
//       unsubscribe()
//     }
//   }, [])

//   useEffect(() => {
//     socketService.on('notify-buyer-accepted', orderAcceptedNotification)
//     socketService.on('notify-buyer-denied', orderDeniedNotification)
//     socketService.on('notify-buyer-completed', orderCompletedNotification)
//     socketService.on('notify-seller-order-reviewed', orderReviewedNotification)
//     socketService.on('notify-seller-new-order', newOrderNotification)
//     return () => {
//       socketService.off('notify-buyer-accepted', orderAcceptedNotification)
//       socketService.off('notify-buyer-denied', orderDeniedNotification)
//       socketService.off('notify-buyer-completed', orderCompletedNotification)
//       socketService.on(
//         'notify-seller-order-reviewed',
//         orderReviewedNotification
//       )
//       socketService.off('notify-seller-new-order', newOrderNotification)
//     }
//   }, [])

//   function orderAcceptedNotification(user: any) {
//     showSuccessMsg(
//       {
//         title: 'ORDER ACCEPTED',
//         body: `${user.username} has accepted your order!`,
//       },
//       {
//         userMsgLeft: '50%',
//         messageAreaPadding: '2em 1.5em 2em 7em',
//         msgStatusTranslateX: '-14em',
//       }
//     )
//   }

//   function orderDeniedNotification(user: any) {
//     showErrorMsg(
//       {
//         title: 'ORDER DENIED',
//         body: `${user.username} has rejected your order!`,
//       },
//       {
//         userMsgLeft: '50%',
//         messageAreaPadding: '2em 1.5em 2em 7em',
//         msgStatusTranslateX: '-14em',
//       }
//     )
//   }

//   function orderCompletedNotification(user: any) {
//     showSuccessMsg(
//       {
//         title: 'ORDER COMPLETED',
//         body: `${user.username} has completed your order!`,
//       },
//       {
//         userMsgLeft: '50%',
//         messageAreaPadding: '2em 1.5em 2em 7em',
//         msgStatusTranslateX: '-14em',
//       }
//     )
//   }

//   function orderReviewedNotification(user: any) {
//     showSuccessMsg(
//       {
//         title: 'ORDER REVIEWED',
//         body: `${user.username} has reviewed your order!`,
//       },
//       {
//         userMsgLeft: '50%',
//         messageAreaPadding: '2em 1.5em 2em 7em',
//         msgStatusTranslateX: '-14em',
//       }
//     )
//   }

//   function newOrderNotification(user: any) {
//     showSuccessMsg(
//       {
//         title: 'NEW ORDER',
//         body: `${user.username} just purchased a gig from you!`,
//       },
//       {
//         userMsgLeft: '50%',
//         messageAreaPadding: '2em 1.5em 2em 7em',
//         msgStatusTranslateX: '-15em',
//       }
//     )
//   }

//   function onCloseMsg() {
//     setIsSlidingOut(false)
//     setMsg(null)
//   }

//   if (!msg) return null

//   const { title, body, type, styles } = msg
//   const svgIconName = type === 'success' ? 'success' : 'error'

//   return (
//     <section
//       className={`user-msg ${isActive ? 'slide-in' : ''} ${
//         isSlidingOut ? 'slide-out' : ''
//       } ${type}`}
//       style={{ left: styles?.userMsgLeft }}
//     >
//       <div
//         className={`message-area flex column ${type}`}
//         style={{ padding: styles?.messageAreaPadding }}
//       >
//         <button className={type} onClick={onCloseMsg}>
//           <SvgIcon iconName={'remove'} />
//         </button>

//         <div
//           className={`msg-status flex row ${type}`}
//           style={{ transform: `translateX(${styles?.msgStatusTranslateX})` }}
//         >
//           <SvgIcon iconName={svgIconName} />
//           <p>{`${svgIconName}!`}</p>
//         </div>

//         <h3 className={type}>{title}</h3>
//         <p>{body}</p>
//       </div>
//     </section>
//   )
// }
