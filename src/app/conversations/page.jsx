import Image from 'next/image'
import styles from './page.module.css'

const links = [
    {
        id: 1,
        url: "/"
    },
    {
        id: 2,
        url: "/conversations"
    },

]

export default function Conversation() {

   const linkWithId1 = links.find((link) => link.id === 1);
   const linkWithId2 = links.find((link) => link.id === 2);
    return (
        <div className={styles.mainContainer}>
            <div className={styles.sidebarContainer}>
                <div className={styles.sidebarLogo}>
                    <Image
                    src="/graph_logo.svg"
                    alt="Next.js Logo"
                    width="43"
                    height="43"
                    priority
                    />
                </div>
                <div className={styles.midSideBarContainer}>
                    <div>
                        <a href={linkWithId1 ? linkWithId1.url : '#'}>
                        <Image
                            src="/category2.svg"
                            alt="Next.js Logo"
                            width="24"
                            height="24"
                            priority
                        />
                        </a>
                    </div>
                    <div className={styles.unreadMessagesContainer}>
                        <Image
                        src="/bag.svg"
                        alt="Next.js Logo"
                        width="24"
                        height="24"
                        priority
                    />
                    <div className={styles.unreadMessageIndicator}>3</div>
                    </div>
                    <div>
                        <Image
                        src="/user.svg"
                        alt="Next.js Logo"
                        width="24"
                        height="24"
                        priority
                        />
                    </div>
                    <div>
                        <a href={linkWithId2 ? linkWithId2.url : '#'}>
                        <Image
                        src="/folder.svg"
                        alt="Next.js Logo"
                        width="24"
                        height="24"
                        priority
                        />
                        </a>
                    </div>
                    <div className={styles.sidebarChat}>
                        <a href={linkWithId1 ? linkWithId1.url : '#'}>
                        <Image
                        src="/chat.svg"
                        alt="Next.js Logo"
                        width="24"
                        height="24"
                        priority
                        />
                        </a>
                    </div>
                    <div>
                        <Image
                        src="/setting.svg"
                        alt="Next.js Logo"
                        width="24"
                        height="24"
                        priority
                        />
                    </div>
                </div>
                <div className={styles.bottomSidebarContainer}>
                    <div className={styles.bottomSidebarContainer2}>
                        <div className={styles.sidebarContact}>
                             <Image
    
                                src="/contact.svg"
                                alt="Next.js Logo"
                                width="24"
                                height="24"
                                priority
                                />
                        </div>
                        <div className={styles.sidebarGift}>
                            <Image
    
                                src="/gift.svg"
                                alt="Next.js Logo"
                                width="24"
                                height="24"
                                priority
                                />
                        </div>
                    </div>
                    <div>
                        <Image

                            src="/logout.svg"
                            alt="Next.js Logo"
                            width="24"
                            height="24"
                            priority
                            />
                    </div>
                </div>
            </div>


            <div className={styles.rightMainContainer}>
                <div className={styles.navbarContainer}>
                <div>
                <p>Conservations</p>
                <div className={styles.rightHomeContainer}>
                    <Image
                    src="/home.svg" 
                    alt="Next.js Logo" 
                    width="13" 
                    height="13"
                    priority />
                    <p>/</p>
                    <p>Conversations</p>
                </div>
                </div>
                <div className={styles.rightnavbarContainer}>
                <div className={styles.rightnavbarContainer2}>
                    <p>Nanny&apos;s Shop</p>
                    <Image
                    src="/down_arrow.svg"
                    alt="Next.js Logo"
                    width="24"
                    height="24"
                    priority
                />
                </div>
                <div>
                    <Image
                    src="/notification.svg"
                    alt="Next.js Logo"
                    width="14"
                    height="14"
                    priority
                />
                </div>
                <div>
                    <Image
                    className={styles.navbar_Img}
                    src="/dp.jpeg"
                    alt="Next.js Logo"
                    width="32"
                    height="32"
                    priority
                />
                </div>
                </div>
            </div>

            <div className={styles.conversationTitleContainer}>
                <div>
                    <p>Conversations with Customers</p>
                </div>
                <div className={styles.conversationTitleDescContainer}>
                    <p>New Message</p>
                </div>
            </div>

            <div className={styles.conversationMainMessagesContainer}>
                <div className={styles.contactsMainContainer}>
                    <div className={styles.contactsContainer}>
                        <div>
                            <h3>Contacts</h3>
                        </div>
                        <div>
                            <p>34</p>
                        </div>
                    </div>
                    <div className={styles.contactsInputContainer}>
                        <div>
                            <Image
                            src="/search.svg"
                            alt="Next.js Logo"
                            width="15"
                            height="15"
                            priority
                        />
                        </div>
                        <div>
                            <p>Search</p>
                        </div>
                    </div>
                    <div className={styles.usermessageMainContainer}>
                        <div className={styles.userMainmessageContainer}>
                            <div className={styles.userProfileMainContainer}>
                            <div className={styles.userProfileContainer}>
                                <Image
                                className={styles.user_Img}
                                src="/dp2.png"
                                alt="Next.js Logo"
                                width="49"
                                height="49"
                                priority
                            />
                           <div className={styles.onlineIndicator}>
                            <Image
                                className={styles.user_Img}
                                src="/online.svg"
                                alt="Next.js Logo"
                                width="49"
                                height="49"
                                priority
                            />
                           </div>
                            </div>
                            <div className={styles.userDescContainer}>
                                <h3>Jane Doe</h3>
                                <p>Hi, i want make enquiries about yo...</p>
                            </div>
                            </div>
                            <div className={styles.userDescContainer2}>
                                <h3>New</h3>
                                <p>12:55am</p>
                            </div>
                        </div>

                            <div className={styles.usermessageContainer}>
                            <div className={styles.userProfileMainContainer}>
                            <div className={styles.userProfileContainer}>
                                <Image
                                className={styles.user_Img}
                                src="/dp3.png"
                                alt="Next.js Logo"
                                width="49"
                                height="49"
                                priority
                            />
                           <div className={styles.onlineIndicator}>
                            <Image
                                className={styles.user_Img}
                                src="/online2.svg"
                                alt="Next.js Logo"
                                width="49"
                                height="49"
                                priority
                            />
                           </div>
                            </div>
                            <div className={styles.userDescContainer}>
                                <h3>Janet Adebayo</h3>
                                <p>Hi, i want make enquiries about yo...</p>
                            </div>
                            </div>
                            <div className={styles.userDescContainer2}>
                                <h3>New</h3>
                                <p>12:55am</p>
                            </div>
                        </div>

                            <div className={styles.usermessageContainer}>
                            <div className={styles.userProfileMainContainer}>
                            <div className={styles.userProfileContainer}>
                                <Image
                                className={styles.user_Img}
                                src="/dp4.png"
                                alt="Next.js Logo"
                                width="49"
                                height="49"
                                priority
                            />
                           <div className={styles.onlineIndicator}>
                            <Image
                                className={styles.user_Img}
                                src="/online.svg"
                                alt="Next.js Logo"
                                width="49"
                                height="49"
                                priority
                            />
                           </div>
                            </div>
                            <div className={styles.userDescContainer}>
                                <h3>Kunle Adekunle</h3>
                                <p>Hi, i want make enquiries about yo...</p>
                            </div>
                            </div>
                            <div className={styles.userDescContainer2}>
                                <h3>New</h3>
                                <p>12:55am</p>
                            </div>
                        </div>

                            <div className={styles.usermessageContainer}>
                            <div className={styles.userProfileMainContainer}>
                            <div className={styles.userProfileContainer}>
                                <Image
                                className={styles.user_Img}
                                src="/dp2.png"
                                alt="Next.js Logo"
                                width="49"
                                height="49"
                                priority
                            />
                           <div className={styles.onlineIndicator}>
                            <Image
                                className={styles.user_Img}
                                src="/online.svg"
                                alt="Next.js Logo"
                                width="49"
                                height="49"
                                priority
                            />
                           </div>
                            </div>
                            <div className={styles.userDescContainer}>
                                <h3>Jane Doe</h3>
                                <p>Hi, i want make enquiries about yo...</p>
                            </div>
                            </div>
                            <div className={styles.userDescContainer4}>
                                <h3>2</h3>
                                <p>12:55am</p>
                            </div>
                        </div>

                            <div className={styles.usermessageContainer}>
                            <div className={styles.userProfileMainContainer}>
                            <div className={styles.userProfileContainer}>
                                <Image
                                className={styles.user_Img}
                                src="/dp3.png"
                                alt="Next.js Logo"
                                width="49"
                                height="49"
                                priority
                            />
                           <div className={styles.onlineIndicator}>
                            <Image
                                className={styles.user_Img}
                                src="/online.svg"
                                alt="Next.js Logo"
                                width="49"
                                height="49"
                                priority
                            />
                           </div>
                            </div>
                            <div className={styles.userDescContainer}>
                                <h3>Janet Adebayo</h3>
                                <p>Hi, i want make enquiries about yo...</p>
                            </div>
                            </div>
                            <div className={styles.userDescContainer3}>
                                <p>12:55am</p>
                            </div>
                        </div>

                            <div className={styles.usermessageContainer}>
                            <div className={styles.userProfileMainContainer}>
                            <div className={styles.userProfileContainer}>
                                <Image
                                className={styles.user_Img}
                                src="/dp4.png"
                                alt="Next.js Logo"
                                width="49"
                                height="49"
                                priority
                            />
                           <div className={styles.onlineIndicator}>
                            <Image
                                className={styles.user_Img}
                                src="/online2.svg"
                                alt="Next.js Logo"
                                width="49"
                                height="49"
                                priority
                            />
                           </div>
                            </div>
                            <div className={styles.userDescContainer}>
                                <h3>Kunle Adekunle</h3>
                                <p>Hi, i want make enquiries about yo...</p>
                            </div>
                            </div>
                            <div className={styles.userDescContainer3}>
                                <p>12:55am</p>
                            </div>
                        </div>

                            <div className={styles.usermessageContainer}>
                            <div className={styles.userProfileMainContainer}>
                            <div className={styles.userProfileContainer}>
                                <Image
                                className={styles.user_Img}
                                src="/dp2.png"
                                alt="Next.js Logo"
                                width="49"
                                height="49"
                                priority
                            />
                           <div className={styles.onlineIndicator}>
                            <Image
                                className={styles.user_Img}
                                src="/online2.svg"
                                alt="Next.js Logo"
                                width="49"
                                height="49"
                                priority
                            />
                           </div>
                            </div>
                            <div className={styles.userDescContainer}>
                                <h3>Jane Doe</h3>
                                <p>Hi, i want make enquiries about yo...</p>
                            </div>
                            </div>
                            <div className={styles.userDescContainer3}>
                                <p>12:55am</p>
                            </div>
                        </div>

                            <div className={styles.usermessageContainer}>
                            <div className={styles.userProfileMainContainer}>
                            <div className={styles.userProfileContainer}>
                                <Image
                                className={styles.user_Img}
                                src="/dp3.png"
                                alt="Next.js Logo"
                                width="49"
                                height="49"
                                priority
                            />
                           <div className={styles.onlineIndicator}>
                            <Image
                                className={styles.user_Img}
                                src="/online2.svg"
                                alt="Next.js Logo"
                                width="49"
                                height="49"
                                priority
                            />
                           </div>
                            </div>
                            <div className={styles.userDescContainer}>
                                <h3>Janet Adebayo</h3>
                                <p>Hi, i want make enquiries about yo...</p>
                            </div>
                            </div>
                            <div className={styles.userDescContainer3}>
                                <p>12:55am</p>
                            </div>
                        </div>

                            <div className={styles.usermessageContainer}>
                            <div className={styles.userProfileMainContainer}>
                            <div className={styles.userProfileContainer}>
                                <Image
                                className={styles.user_Img}
                                src="/dp4.png"
                                alt="Next.js Logo"
                                width="49"
                                height="49"
                                priority
                            />
                           <div className={styles.onlineIndicator}>
                            <Image
                                className={styles.user_Img}
                                src="/online2.svg"
                                alt="Next.js Logo"
                                width="49"
                                height="49"
                                priority
                            />
                           </div>
                            </div>
                            <div className={styles.userDescContainer}>
                                <h3>Kunke Adekunle</h3>
                                <p>Hi, i want make enquiries about yo...</p>
                            </div>
                            </div>
                            <div className={styles.userDescContainer3}>
                                <p>12:55am</p>
                            </div>
                        </div>
                            <div className={styles.usermessageContainer}>
                            <div className={styles.userProfileMainContainer}>
                            <div className={styles.userProfileContainer}>
                                <Image
                                className={styles.user_Img}
                                src="/dp4.png"
                                alt="Next.js Logo"
                                width="49"
                                height="49"
                                priority
                            />
                           <div className={styles.onlineIndicator}>
                            <Image
                                className={styles.user_Img}
                                src="/online.svg"
                                alt="Next.js Logo"
                                width="49"
                                height="49"
                                priority
                            />
                           </div>
                            </div>
                            <div className={styles.userDescContainer}>
                                <h3>Kunle Adekunle</h3>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div className={styles.messagesMainContainer}>
                    <div className={styles.messagesTopContainer}>
                        <div className={styles.messsageonlineIndicator}>
                            <div>
                                <Image
                                className={styles.messageDp}
                                src="/dp2.png"
                                alt="Next.js Logo"
                                width="60"
                                height="60"
                                priority
                            />
                            </div>
                            <div className={styles.messageName}>
                                <p>Jane Doe</p>
                                <div className={styles.messageNameIndicator}>
                                    <div>
                                        <Image
                                        src="/online.svg"
                                        alt="Next.js Logo"
                                        width="12"
                                        height="12"
                                        priority
                                    />
                                    </div>
                                    <div>
                                        <p>Online</p>
                                    </div>
                                    <div>
                                        <h3>12:55 am</h3>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.messageMainOrderContainer}> 
                            <div className={styles.messageOrderContainer}>
                                <div>
                                    <h3>New Customer</h3>
                                </div>
                                <div>
                                    <p>View Profile</p>
                                </div>
                            </div>
                            <div className={styles.messageOrderContainer2}>
                                <Image
                                src="/bag.svg"
                                alt="Next.js Logo"
                                width="20"
                                height="20"
                                priority
                            />
                            <p>0 Orders</p>
                            </div>
                        </div>
                    </div>

                    <div className={styles.dateMessageContainer}>
                        <p>12 August 2022</p>
                    </div>

                    <div className={styles.conversationContainerOne}>
                        <div className={styles.chatSentOne}>
                            <div className={styles.chatSentTwo}>
                            <div>
                                <Image
                                src="/iphone_gold.png"
                                alt="Next.js Logo"
                                width="49"
                                height="49"
                                priority
                            />
                            </div>
                            <div>
                                <p>iPhone 13</p>
                                <h3>₦730,000.00</h3>
                            </div>
                        </div>
                        <div className={styles.stockMessage}>
                            <p><span>12</span> in Stock</p>
                        </div>
                        </div>
                        <div className={styles.chatSentThree}>
                            <h3>Hello, I want to make enquiries about your product</h3>
                            <p>12:55 am</p>
                        </div>
                    </div>

                    <div className={styles.conversationContainerTwo}>
                        <div className={styles.chatReceivedContainer}>
                            <h3>Hello Janet, thank you for reaching out</h3>
                            <div className={styles.timeReceivedContainer}>
                                <div>
                                    <p>12:57am</p>
                                </div>
                                <div>
                                    <Image
                                    src="/check.svg"
                                    alt="Next.js Logo"
                                    width="12"
                                    height="12"
                                    priority
                                    />
                                </div>
                            </div>
                        </div>

                        <div className={styles.chatReceivedContainer}>
                            <h3>What do you need to know?</h3>
                            <div className={styles.timeReceivedContainer}>
                                <div>
                                    <p>12:57am</p>
                                </div>
                                <div>
                                    <Image
                                    src="/check.svg"
                                    alt="Next.js Logo"
                                    width="12"
                                    height="12"
                                    priority
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                     <div className={styles.dateMessageContainer}>
                        <p>Today</p>
                    </div>

                    <div className={styles.chatSentThreeContainer}>
                        <div className={styles.chatSentThree}>
                            <h3>I want to know if the price is negotiable, i need about 2 Units</h3>
                            <p>12:55 am</p>
                     </div>
                    </div>

                    <div className={styles.sendMessageContainer}>
                        <div className={styles.addContainer}>
                            <div className={styles.addImageContainer}>
                                <Image
                                src="/add.svg"
                                alt="Next.js Logo"
                                width="24"
                                height="24"
                                priority
                                />
                            </div>
                            <div>
                                <p>Your message</p>
                            </div>
                        </div>

                        <div className={styles.emojiMessageContainer}>
                            <div>
                                <Image
                                src="/emoji.svg"
                                alt="Next.js Logo"
                                width="24"
                                height="24"
                                priority
                                />
                            </div>
                            <div className={styles.sendContainer}>
                                <div>
                                    <p>Send</p>
                                </div>
                                <div>
                                    <Image
                                    src="/send.svg"
                                    alt="Next.js Logo"
                                    width="24"
                                    height="24"
                                    priority
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            </div>

        </div>
    )
}