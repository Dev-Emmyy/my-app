import Image from 'next/image'
import styles from './page.module.css'

const links = [
    {
        id: 1,
        title: "Dashboard",
        url: "/"
    },
    {
        id: 2,
        title: "Conversations",
        url: "/conversations"
    },

]




export default function Home() {

   const linkWithId1 = links.find((link) => link.id === 1);
   const linkWithId2 = links.find((link) => link.id === 2);
  return (
   <div className={styles.mainContainer}>
    <div className={styles.sidebarContainer}>
      <div className={styles.sidebarLogo}>
        <Image
          src="/graph_logo.svg"
          alt="img"
          width="52"
          height="52"
          priority
        />

        <div className={styles.sidebarLogoTitle}>
          <p>Metrix</p>
        </div>

      </div>


      <div className={styles.sidebarMiddleContainer}>
        <div className={styles.sidebarMiddleMainLogo}>
        <Image
          src="/category.svg"
          alt="img"
          width="24"
          height="24"
          priority
        />

        {linkWithId1 && (
          <div className={styles.sidebarMiddleMainTitle}>
            <a href={linkWithId1.url}>
              <p>{linkWithId1.title}</p>
            </a>
          </div>
        )}
        </div>

        <div className={styles.sidebarMiddleLogo}>
        <Image
          src="/bag.svg"
          alt="img"
          width="24"
          height="24"
          priority
        />

        <div className={styles.sidebarMiddleTitle}>
          <p>Orders</p>
        </div>

        <div className={styles.sidebarMiddleTitle2}>
          <p>3</p>
        </div>
        </div>

        <div className={styles.sidebarMiddleLogo}>
        <Image
          src="/user.svg"
          alt="img"
          width="24"
          height="24"
          priority
        />

        <div className={styles.sidebarMiddleTitle}>
          <p>Customers</p>
        </div>
        </div>

        <div className={styles.sidebarMiddleLogo}>
        <Image
          src="/folder.svg"
          alt="img"
          width="24"
          height="24"
          priority
        />

        <div className={styles.sidebarMiddleTitle}>
          <p>Inventory</p>
        </div>
        </div>

        <div className={styles.sidebarMiddleLogo}>
        <Image
          src="/chat.svg"
          alt="img"
          width="24"
          height="24"
          priority
        />

        {linkWithId2 && (
          <div className={styles.sidebarMiddleTitle}>
            <a href={linkWithId2.url}>
              <p>{linkWithId2.title}</p>
            </a>
          </div>
        )}

        <div className={styles.sidebarMiddleTitle3}>
          <p>16</p>
        </div>
        </div>

        <div className={styles.sidebarMiddleLogo}>
        <Image
          src="/setting.svg"
          alt="img"
          width="24"
          height="24"
          priority
        />

        <div className={styles.sidebarMiddleTitle}>
          <p>Settings</p>
        </div>
        </div>
      </div>

      <div className={styles.sidebarBottomContainer}>
        <div className={styles.sidebarBottomLogo}>
        <Image
          src="/contact.svg"
          alt="img"
          width="24"
          height="24"
          priority
        />

        <div className={styles.sidebarBottomTitle}>
          <p>Contact Support</p>
        </div>
        </div>

        <div className={styles.sidebarBottomContainer2}>
          <div className={styles.sidebarBottomLogo2}>
        <Image
          src="/gift.svg"
          alt="img"
          width="24"
          height="24"
          priority
        />

        <div className={styles.sidebarBottomTitle}>
          <p>Free Gift Awaits You!</p>
        </div>
        </div>

        <div className={styles.sidebarLogo}>
        <div className={styles.sidebarBottomTitle2}>
          <p>Upgrade your account</p>
        </div>

        <Image
          src="/side_arrow.svg"
          alt="img"
          width="24"
          height="24"
          priority
        />
        </div>
        </div>

        <div className={styles.sidebarLogo}>
        <Image
          src="/logout.svg"
          alt="img"
          width="24"
          height="24"
          priority
        />

        <div className={styles.sidebarBottomTitle}>
          <p>Logout</p>
        </div>
        </div>

        
      </div>

   </div>




   <div className={styles.rightContainer}>
    <div className={styles.navbarContainer}>
      <div>
        <p>Dashboard</p>
        <Image
         src="/home.svg" 
         alt="img" 
          width="13" 
          height="13"
         priority />
      </div>
      <div className={styles.rightnavbarContainer}>
        <div className={styles.rightnavbarContainer2}>
          <p>Nanny&apos;s Shop</p>
          <Image
          src="/down_arrow.svg"
          alt="img"
          width="24"
          height="24"
          priority
        />
        </div>
        <div>
          <Image
          src="/notify.svg"
          alt="img"
          width="15"
          height="15"
          priority
        />
        </div>
        <div>
          <Image
          className={styles.navbar_Img}
          src="/dp.jpeg"
          alt="img"
          width="32"
          height="32"
          priority
        />
        </div>
      </div>
    </div>

    <div className={styles.summarydashboardContainer}>
      <div className={styles.summaryMainContainer}>
        <div className={styles.summaryContainer}>
          <div className={styles.summaryImgContainer}>
            <Image
            src="/graph.svg"
            alt="img"
            width="32"
            height="32"
            priority
          />
          </div>
          <div className={styles.summaryDaysContainer}>
            <p>This Week</p>
            <Image
            src="/down_arrow2.svg"
            alt="img"
            width="32"
            height="32"
            priority
          />
          </div>
        </div>

        <div className={styles.summaryContainer2}>
          <div>
            <p>Sales</p>
            <h3>₦4,000,000.00</h3>
          </div>
          <div>
            <p>Volume</p>
            <h3>450 <span>+20.00%</span></h3>
          </div>
        </div>
      </div>

       <div className={styles.summaryMainContainer}>
        <div className={styles.summaryContainer}>
          <div className={styles.summaryImgContainer2}>
            <Image
            src="/user2.svg"
            alt="img"
            width="32"
            height="32"
            priority
          />
          </div>
          <div className={styles.summaryDaysContainer}>
             <p>This Week</p>
              <Image
            src="/down_arrow2.svg"
            alt="img"
            width="32"
            height="32"
            priority
          />
          </div>
        </div>

        <div className={styles.summaryContainer2}>
          <div>
            <p>Customers</p>
            <h3>1,250 <span>+15.80%</span></h3>
          </div>
          <div>
            <p>Active</p>
            <h3>1,180 <span>85%</span></h3>
          </div>
        </div>
      </div>

       <div className={styles.summaryMainContainer2}>
        <div className={styles.summaryContainer}>
          <div className={styles.summaryImgContainer2}>
            <Image
            src="/bag2.svg"
            alt="img"
            width="32"
            height="32"
            priority
          />
          </div>
          <div className={styles.summaryDaysContainer}>
            <p>This Week</p>
            <Image
            src="/down_arrow2.svg"
            alt="img"
            width="32"
            height="32"
            priority
          />
          </div>
        </div>

        <div className={styles.summaryContainer3}>
          <div>
            <p>All Orders</p>
            <h3>450</h3>
          </div>
          <div>
            <p>Pending</p>
            <h3>5</h3>
          </div>
          <div>
            <p>Completed</p>
            <h3>445</h3>
          </div>
        </div>
      </div>
    </div>



    <div className={styles.dashboardContainer}>
      <div className={styles.dashboardMainContainer}>
        <div className={styles.dashboardContainer}>
          <div className={styles.barChartContainer}>
            <div className={styles.barChartTopContainer}>
              <div>
                <p> Marketing</p>
              </div>
              <div className={styles.barChartTopContainer2}>
                <p>This Week</p>
                <Image
                src="/down_arrow2.svg"
                alt="img"
                width="32"
                height="32"
                priority
              />
              </div>
            </div>
            <div className={styles.barChartMidContainer}>
              <div className={styles.chartColorContainer}>
               <p className={styles.chartOne}></p>
                <p>Acquistion</p>
              </div>
              <div className={styles.chartColorContainer}>
               <p className={styles.chartTwo}></p>
                <p>Purchase</p>
              </div>
              <div className={styles.chartColorContainer}>
               <p className={styles.chartThree}></p>
                <p>Retention</p>
              </div>
            </div>
             <div className={styles.barChartImgContainer}>
              <Image
                src="/group.svg"
                alt="img"
                width="205"
                height="205"
                priority
              />
             </div>
          </div>


         <div className={styles.barChartMainContainer2}>
          <div className={styles.barChartContainer2}>
            <div className={styles.barChartImg}>
             <Image
                src="/folder2.svg"
                alt="img"
                width="32"
                height="32"
                priority
              /> 
            </div>
            <div className={styles.barChartDescContainer2}>
              <div>
                <p>All Products</p>
                <h3>45</h3>
              </div>
              <div>
                <p>Active</p>
                <h3>32 <span>+24%</span></h3>
              </div>
            </div>
          </div>
          
          <div className={styles.barChartMainContainer3}>
            <div>
            <div className={styles.barChartContainer3}>
               <div className={styles.barChartImg2}>
                <Image
                src="/cart.svg"
                alt="img"
                width="32"
                height="32"
                priority
              /> 
               </div>
              <div className={styles.barChartTopContainer3}>
                <div>
                  <p>This Week</p>
                </div>
                <div>
                  <Image
                  src="/down_arrow2.svg"
                  alt="img"
                  width="32"
                  height="32"
                  priority
                /> 
                </div>
              </div>
            </div>
            </div>
            <div className={styles.barChartDescContainer3}>
              <div className={styles.Desc3}>
                <p >Abondoned Cart</p>
                <h3>20% <span>+0.00%</span></h3>
              </div>
              <div>
                <p>Customers</p>
                <h3>30</h3>
              </div>
            </div>
          </div>
         </div>
        </div>

        <div className={styles.dashboardSummaryContainer}>
        <div className={styles.orderDescMainContainer}>
          <div className={styles.orderDescContainer}>
            <p>Summary</p>
            <div className={styles.salesContainer}>
              <p>Sales</p>
               <Image
                src="/down_arrow3.svg"
                alt="img"
                width="32"
                height="32"
                priority
              />
            </div>
          </div>
          <div className={styles.salesContainer2}>
            <p>Last 7 Days</p>
             <Image
              src="/down_arrow4.svg"
              alt="img"
              width="32"
              height="32"
              priority
            />
          </div>
        </div>

        <div className={styles.salesRateMainContainer}>
          <div className={styles.rateNumberContainer}>
            <p>100k</p>
            <p>80k</p>
            <p>60k</p>
            <p>40k</p>
            <p>20k</p>
          </div>

          <div className={styles.salesRateContainer}>
            <div>
               <Image
                src="/bar_1.svg"
                alt="img"
                width="13"
                height="241"
                priority
              />
              <p>Sept 10</p>
            </div>
            <div>
               <Image
                src="/bar_2.svg"
                alt="img"
                width="50"
                height="241"
                priority
              />
              <p>Sept 11</p>
            </div>
            <div>
               <Image
                src="/bar_3.svg"
                alt="img"
                width="50"
                height="241"
                priority
              />
              <p>Sept 12</p>
            </div>
            <div>
               <Image
                src="/bar_4.svg"
                alt="img"
                width="50"
                height="241"
                priority
              />
              <p>Sept 13</p>
            </div>
            <div>
               <Image
                src="/bar_5.svg"
                alt="img"
               width="50"
                height="241"
                priority
              />
              <p>Sept 14</p>
            </div>
            <div>
               <Image
                src="/bar_6.svg"
                alt="img"
                width="50"
                height="241"
                priority
              />
              <p>Sept 15</p>
            </div>
            <div>
               <Image
                src="/bar_7.svg"
                alt="img"
                width="50"
                height="241"
                priority
              />
              <p>Sept 16</p>
            </div>
          </div>
        </div>
      </div>

      </div>


       <div className={styles.dashboardMainOrderContainer}>
        <div className={styles.dashboardMainOrderTitleContainer}>
          <p>Recent Orders</p>
        </div>

        <div className={styles.dashboardOrderContainer}>
          <div className={styles.dashboardOrderContainer2}>
            <div>
                <Image
                src="/iphone_gold.png"
                alt="img"
                width="49"
                height="49"
                priority
              />
            </div>
            <div>
              <p>iPhone 13</p>
              <h3>₦730,000.00 x 1</h3>
            </div>
          </div>
          <div className={styles.dashboardOrderContainer3}>
            <p>12 Sept 2022</p>
            <h3>Pending</h3>
          </div>
        </div>

         <div className={styles.dashboardOrderContainer}>
          <div className={styles.dashboardOrderContainer2}>
            <div>
                <Image
                src="/iphone_black.png"
                alt="img"
                width="49"
                height="49"
                priority
              />
            </div>
            <div>
              <p>iPhone 13</p>
              <h3>₦730,000.00 x 1</h3>
            </div>
          </div>
          <div className={styles.dashboardOrderContainer4}>
            <p>12 Sept 2022</p>
            <h3>Completed</h3>
          </div>
        </div>

         <div className={styles.dashboardOrderContainer}>
          <div className={styles.dashboardOrderContainer2}>
            <div>
                <Image
                src="/iphone_gold.png"
                alt="img"
                width="49"
                height="49"
                priority
              />
            </div>
            <div>
              <p>iPhone 13</p>
              <h3>₦730,000.00 x 1</h3>
            </div>
          </div>
          <div className={styles.dashboardOrderContainer3}>
            <p>12 Sept 2022</p>
            <h3>Pending</h3>
          </div>
        </div>

         <div className={styles.dashboardOrderContainer}>
          <div className={styles.dashboardOrderContainer2}>
            <div>
                <Image
                src="/iphone_black.png"
                alt="img"
                width="49"
                height="49"
                priority
              />
            </div>
            <div>
              <p>iPhone 13</p>
              <h3>₦730,000.00 x 1</h3>
            </div>
          </div>
          <div className={styles.dashboardOrderContainer4}>
            <p>12 Sept 2022</p>
            <h3>Completed</h3>
          </div>
        </div>

         <div className={styles.dashboardOrderContainer}>
          <div className={styles.dashboardOrderContainer2}>
            <div>
                <Image
                src="/iphone_black.png"
                alt="img"
                width="49"
                height="49"
                priority
              />
            </div>
            <div>
              <p>iPhone 13</p>
              <h3>₦730,000.00 x 1</h3>
            </div>
          </div>
          <div className={styles.dashboardOrderContainer4}>
            <p>12 Sept 2022</p>
            <h3>Completed</h3>
          </div>
        </div>

         <div className={styles.dashboardOrderContainer}>
          <div className={styles.dashboardOrderContainer2}>
            <div>
                <Image
                src="/iphone_black.png"
                alt="img"
                width="49"
                height="49"
                priority
              />
            </div>
            <div>
              <p>iPhone 13</p>
              <h3>₦730,000.00 x 1</h3>
            </div>
          </div>
          <div className={styles.dashboardOrderContainer4}>
            <p>12 Sept 2022</p>
            <h3>Completed</h3>
          </div>
        </div>

         <div className={styles.dashboardOrderContainer}>
          <div className={styles.dashboardOrderContainer2}>
            <div>
                <Image
                src="/iphone_gold.png"
                alt="img"
                width="49"
                height="49"
                priority
              />
            </div>
            <div>
              <p>iPhone 13</p>
              <h3>₦730,000.00 x 1</h3>
            </div>
          </div>
          <div className={styles.dashboardOrderContainer3}>
            <p>12 Sept 2022</p>
            <h3>Pending</h3>
          </div>
        </div>

         <div className={styles.dashboardOrderContainer}>
          <div className={styles.dashboardOrderContainer2}>
            <div>
                <Image
                src="/iphone_gold.png"
                alt="img"
                width="49"
                height="49"
                priority
              />
            </div>
            <div>
              <p>iPhone 13</p>
              <h3>₦730,000.00 x 1</h3>
            </div>
          </div>
          <div className={styles.dashboardOrderContainer3}>
            <p>12 Sept 2022</p>
            <h3>Pending</h3>
          </div>
        </div>
      </div>

      
    </div>



   </div>

    </div>
  )
}
