import React from 'react'
import Event from './Event'

const Calendar = () => {
  return (
    <div className="Calendar">
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Sunday</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="time">8 am</td>
            <Event event='Starbucks ☕️' color='green' location='123 W Main St, Chicago, IL' />
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <Event event="Yolk 🍳" color='green' location='355 E Ohio St, Chicago, IL' />
            <td></td>
          </tr>

          <tr>
            <td className="time">9 am</td>
            <td></td>
            <Event event="Meeting 📅" color='blue' location='200 S Wacker Dr, Chicago, IL' />
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <Event event="Code Review 💻" color='pink' location='600 W Chicago Ave, Chicago, IL' />
          </tr>

          <tr>
            <td className="time">10 am</td>
            <td></td>
            <td></td>
            <td></td>
            <Event event="Workout 🏋️‍♂️" color='pink' location='1500 N Clybourn Ave, Chicago, IL' />
            <td></td>
            <td></td>
            <Event event="Team Sync 🤝" color='blue' location='233 S Wacker Dr, Chicago, IL' />
          </tr>

          <tr>
            <td className="time">11 am</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <Event event="Lunch 🍴" color='green' location='500 N Michigan Ave, Chicago, IL' />
            <td></td>
            <td></td>
          </tr>

          <tr>
            <td className="time">12 pm</td>
            <td></td>
            <td></td>
            <Event event="Client Call 📞" color='blue' location='111 N Canal St, Chicago, IL' />
            <td></td>
            <td></td>
            <td></td>
            <Event event="Brainstorming 💡" color='green' location='222 Merchandise Mart Plaza, Chicago, IL' />
            <td></td>
          </tr>

          <tr>
            <td className="time">1 pm</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>

          <tr>
            <td className="time">2 pm</td>
            <td></td>
            <td></td>
            <Event event="Design Review 🎨" color='blue' location='400 N State St, Chicago, IL' />
            <td></td>
            <td></td>
            <Event event="Debugging 🐛" color='pink' location='300 S Riverside Plaza, Chicago, IL' />
            <td></td>
            <td></td>
          </tr>

          <tr>
            <td className="time">3 pm</td>
            <td></td>
            <Event event="Presentation 📢" color='green' location='180 N LaSalle St, Chicago, IL' />
            <td></td>
            <td></td>
            <td></td>
            <Event event="One-on-One 🗣️" color='blue' location='350 N Orleans St, Chicago, IL' />
            <td></td>
            <td></td>
          </tr>

          <tr>
            <td className="time">4 pm</td>
            <td></td>
            <td></td>
            <td></td>
            <Event event="Wrap-Up Meeting 📝" color='pink' location='71 S Wacker Dr, Chicago, IL' />
            <td></td>
            <td></td>
            <Event event="Happy Hour 🍹" color='green' location='85 E Wacker Dr, Chicago, IL' />
          </tr>

          <tr>
            <td className="time">5 pm</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}


export default Calendar