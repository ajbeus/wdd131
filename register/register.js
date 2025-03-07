let participantCount = 1;

function participantTemplate(count) {
    return `
    <section class="participant${count}">
        <p>Participant ${count}</p>
        <div class="item">
            <label for="fname${count}"> First Name<span>*</span></label>
            <input id="fname${count}" type="text" name="fname${count}" value="" required />
        </div>
        <div class="item activities">
            <label for="activity${count}">Activity #<span>*</span></label>
            <input id="activity${count}" type="text" name="activity${count}" />
        </div>
        <div class="item">
            <label for="fee${count}">Fee ($)<span>*</span></label>
            <input id="fee${count}" type="number" name="fee${count}" />
        </div>
        <div class="item">
            <label for="date${count}">Desired Date <span>*</span></label>
            <input id="date${count}" type="date" name="date${count}" />
        </div>
        <div class="item">
            <p>Grade</p>
            <select>
            <option selected value="" disabled selected></option>
            <option value="1">1st</option>
            <option value="2">2nd</option>
            <option value="3">3rd</option>
            <option value="4">4th</option>
            <option value="5">5th</option>
            <option value="6">6th</option>
            <option value="7">7th</option>
            <option value="8">8th</option>
            <option value="9">9th</option>
            <option value="10">10th</option>
            <option value="11">11th</option>
            <option value="12">12th</option>
            </select>
        </div>
        </section>
        `;
}
document.getElementById('add').onclick = function() {
    participantCount = participantCount + 1; 
    const newParticipant = makeNewParticipant(participantCount); 
    this.insertAdjacentHTML('beforebegin', newParticipant); 
  };
  
// Add event listener to form submission
document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
  

    const feeInputs = document.querySelectorAll('input[type="number"][name^="fee"]');
    let totalFees = 0;
    feeInputs.forEach(input => {
      const fee = parseFloat(input.value) || 0; 
      totalFees += fee;
    });
  
    const adultName = document.getElementById('adult_name').value || 'User';
  
    const form = document.querySelector('form');
    form.style.display = 'none';
    const summary = document.getElementById('summary');
    summary.style.display = 'block';
    summary.innerHTML = `Thank you ${adultName} for registering. You have registered ${participantCount} participant(s) and owe $${totalFees.toFixed(2)} in Fees.`;
  });