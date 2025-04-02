// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function () {
    // Health Issue Assessment Form
    const healthForm = document.getElementById('health-form');
    const healthDescription = document.getElementById('health-description');
    const diagnosisResult = document.getElementById('diagnosis-result');
    const firstAidDiv = document.getElementById('first-aid');
    const lifestyleChangesDiv = document.getElementById('lifestyle-changes');

    healthForm.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent form submission
        document.body.style.cursor = "wait";
        diagnosisResult.textContent = "Processing your symptoms... Please wait.";
    setTimeout(() => {
        const issue = healthDescription.value.toLowerCase(); // Delayed execution by 2 seconds
        // Reset cursor back to normal
        document.body.style.cursor = "default";
        // 2 seconds delay  

        // // Hardcoded symptom-to-diagnosis mapping
        // const diagnoses = {
        //     "stomach pain": "Possible Diagnosis: Gastritis, Peptic Ulcer, or Irritable Bowel Syndrome (IBS).",
        //     "heart attack": "Possible Diagnosis: Myocardial Infarction. Seek immediate medical attention!",
        //     "fever": "Possible Diagnosis: Viral Infection, Flu, or Malaria.",
        //     "headache": "Possible Diagnosis: Migraine, Tension Headache, or Sinusitis."
        // };

        // // Provide diagnosis based on input
        // if (issue in diagnoses) {
        //     diagnosisResult.textContent = diagnoses[issue];
        // } else {
        //     diagnosisResult.textContent = "No matching diagnosis found. Please provide more details.";
        // }

        // Simple keyword-based recommendations for first aid and lifestyle changes
        if (issue.includes('pneumonia') || issue.includes('Pneumonia')) {
            diagnosisResult .innerHTML = `
            <h4>Diagnosis</h4>
    <p><strong>Key symptoms</strong> include cough (sometimes with colored mucus), fever, chills, shortness of breath, and chest pain.</p>
    <p>A doctor may identify:</p>
    <ul>
        <li><strong>Physical signs:</strong> Crackling/rales in the lungs, rapid breathing (tachypnea), or low oxygen levels.</li>
        <li><strong>Diagnostic tests:</strong></li>
        <ul>
            <li><strong>Chest X-ray:</strong> Detects lung infiltrates/opacities.</li>
            <li><strong>Blood tests:</strong> Elevated white blood cells (WBC) suggest bacterial infection; inflammatory markers (CRP/ESR) indicate inflammation.</li>
        </ul>
    </ul>
    <p><strong>Differential diagnoses</strong> (conditions with similar symptoms):</p>
    <ul>
        <li>Asthma, COPD, or bronchitis (no infiltrates on X-ray).</li>
        <li>Pulmonary embolism (sudden chest pain, normal X-ray).</li>
        <li>Heart failure (bilateral lung edema on X-ray).</li>
    </ul>
            `;
            firstAidDiv.innerHTML = `
            <h4>First Aid</h4>
    <p>Immediate steps for suspected pneumonia:</p>
    <ol>
        <li><strong>Seek medical help:</strong> Antibiotics (e.g., azithromycin, doxycycline) are critical for bacterial cases.</li>
        <li><strong>Supportive care:</strong></li>
        <ul>
            <li>Use oxygen if breathing is labored.</li>
            <li>Stay hydrated with water, broths, or electrolyte drinks.</li>
            <li>Manage fever with acetaminophen/ibuprofen (avoid aspirin in children).</li>
        </ul>
        <li><strong>Emergency signs requiring hospitalization:</strong></li>
        <ul>
            <li>Rapid breathing (>30 breaths/min), low blood pressure, confusion, or bluish lips.</li>
        </ul>
    </ol>
            `;
            lifestyleChangesDiv.innerHTML = `
            <h4>Lifestyle</h4>
    <p><strong>To recover faster and prevent complications:</strong></p>
    <ul>
        <li><strong>Rest:</strong> Avoid physical strain until fever subsides and coughing improves.</li>
        <li><strong>Hydration:</strong> Drink 8+ cups of fluids daily to loosen mucus.</li>
        <li><strong>Diet:</strong></li>
        <ul>
            <li>Eat anti-inflammatory foods: Leafy greens, whole grains, nuts, and yogurt.</li>
            <li>Avoid processed meats, alcohol, and sugary drinks (they worsen inflammation).</li>
        </ul>
        <li><strong>Avoid irritants:</strong> Quit smoking, steer clear of pollution/secondhand smoke.</li>
        <li><strong>Gentle exercise:</strong> Gradually reintroduce walking or yoga to rebuild lung strength.</li>
    </ul>
            `;
        } else if (issue.includes('covid-19') || issue.includes('covid19') || issue.includes('Covid-19')) {
            diagnosisResult.innerHTML = `
                        <h4>Diagnosis</h4>
                <p><strong>Key symptoms</strong> of COVID-19 include:</p>
                <ul>
                    <li>Fever or chills</li>
                    <li>Cough (new and persistent)</li>
                    <li>Shortness of breath or difficulty breathing</li>
                    <li>Fatigue</li>
                    <li>Muscle or body aches</li>
                    <li>Headache</li>
                    <li>Loss of taste or smell</li>
                    <li>Sore throat</li>
                    <li>Congestion or runny nose</li>
                    <li>Nausea or vomiting</li>
                    <li>Diarrhea</li>
                </ul>
                <p>Symptoms typically appear 2-14 days after exposure to the virus.</p>

                <p><strong>Differential diagnosis</strong> (conditions with similar symptoms):</p>
                <ul>
                    <li>Common cold</li>
                    <li>Influenza (flu)</li>
                    <li>Allergies</li>
                </ul>
            `;
            firstAidDiv.innerHTML = `
                        <h4>First Aid</h4>
                <ol>
                    <li><strong>Isolate:</strong> If you suspect COVID-19, stay home and away from others, including household members.</li>
                    <li><strong>Seek medical help:</strong> Contact your healthcare provider or local health authorities for testing and guidance.</li>
                    <li><strong>Monitor symptoms:</strong></li>
                    <ul>
                        <li>Trouble breathing</li>
                        <li>Persistent chest pain or pressure</li>
                        <li>New confusion</li>
                        <li>Inability to wake or stay awake</li>
                        <li>Bluish lips or face</li>
                    </ul>
                    <li><strong>Emergency response:</strong></li>
                    <ul>
                        <li>If emergency signs are present, call 911 or your local emergency number. Inform them of potential COVID-19 exposure.</li>
                    </ul>
                    <li><strong>CPR considerations:</strong></li>
                    <ul>
                        <li>Perform compression-only CPR if no personal protective equipment (PPE) is available.</li>
                        <li>Use a mask with a one-way valve or bag-valve-mask device if possible.</li>
                        <li>Wear gloves and facial protection.</li>
                    </ul>
                </ol>
            `;
            lifestyleChangesDiv.innerHTML = `
                <h4>Lifestyle Recommendations</h4>
                <p><strong>To reduce the risk of COVID-19 and manage symptoms:</strong></p>
                <ul>
                    <li><strong>Sleep:</strong> Prioritize adequate sleep (7-9 hours per night). Inadequate sleep (less than 4 hours) is associated with increased COVID-19 risk.</li>
                    <li><strong>Diet:</strong></p>
            `;
        } else if (issue.includes('meningitis') || issue.includes('Meningitis')) {
            diagnosisResult.innerHTML = `
            <h4>Diagnosis</h4>
    <p><strong>Key symptoms</strong> of meningitis include:</p>
    <ul>
        <li>Fever</li>
        <li>Severe headache</li>
        <li>Neck stiffness</li>
        <li>Altered level of consciousness or confusion</li>
        <li>Sensitivity to light</li>
        <li>Nausea and vomiting</li>
        <li>Skin rash (particularly in meningococcal meningitis)</li>
    </ul>

    <p><strong>Differential diagnosis</strong> possibilities:</p>
    <ul>
        <li>Viral infections (e.g., influenza, enterovirus)</li>
        <li>Sepsis</li>
        <li>Encephalitis</li>
        <li>Subarachnoid hemorrhage</li>
    </ul>

    <p><strong>Diagnostic tests</strong>:</p>
    <ul>
        <li>Lumbar puncture (spinal tap) to analyze cerebrospinal fluid</li>
        <li>Blood tests (cultures, white blood cell count, C-reactive protein)</li>
        <li>Imaging studies (CT or MRI scans)</li>
        <li>PCR tests for specific pathogens</li>
    </ul>
            `;
            firstAidDiv.innerHTML = `
            <h4>First Aid</h4>
    <ol>
        <li>If meningitis is suspected, call emergency services (999 or local equivalent) immediately.</li>
        <li>Check for signs of a rash, particularly on lighter skin areas like palms or inner eyelids.</li>
        <li>Provide constant reassurance while waiting for medical help.</li>
        <li>Do not wait for all symptoms to appear before seeking help, as the condition can deteriorate rapidly.</li>
        <li>If the person becomes unconscious, check breathing and be prepared to perform CPR if necessary.</li>
    </ol>
            `;
            lifestyleChangesDiv.innerHTML = `
            <h4>Lifestyle</h4>
    <p>To reduce the risk of meningitis and maintain overall health:</p>
    <ol>
        <li><strong>Vaccination:</strong> Stay up-to-date with recommended vaccines, particularly those that protect against bacterial meningitis.</li>
        <li><strong>Hygiene:</strong> Practice good hand hygiene by washing hands frequently, especially in healthcare or daycare settings.</li>
        <li><strong>Avoid close contact:</strong> Limit exposure to individuals with known infections.</li>
        <li><strong>Rest:</strong> Ensure adequate sleep and rest to support the immune system.</li>
        <li><strong>Quit smoking:</strong> Smoking can increase the risk of meningitis, so quitting is beneficial.</li>
        <li><strong>Healthy diet:</strong> Maintain a balanced diet rich in fruits and vegetables to support overall immune function.</li>
        <li><strong>Stress management:</strong> Engage in stress-reducing activities to support overall health and immune function.</li>
    </ol>

    <p><em>Remember, meningitis can be life-threatening, and early diagnosis and treatment are crucial for the best outcomes. Always seek immediate medical attention if meningitis is suspected.</em></p>
            `;
        
        }else if (issue.includes('headache') || issue.includes('Headache')) {
    diagnosisResult.innerHTML = `
    <h4>Diagnosis</h4>
    <p><strong>Key symptoms</strong> of headache include:</p>
    <ul>
        <li>Mild to severe pain in the head or neck</li>
        <li>Nausea or vomiting (common with migraines)</li>
        <li>Sensitivity to light or sound</li>
        <li>Pressure or tightness around the forehead or back of the head (common with tension headaches)</li>
        <li>Throbbing pain, often on one side of the head (common with migraines)</li>
    </ul>

    <p><strong>Differential diagnosis</strong> possibilities:</p>
    <ul>
        <li>Migraine</li>
        <li>Tension-type headache</li>
        <li>Cluster headache</li>
        <li>Sinusitis</li>
        <li>Subarachnoid hemorrhage (severe cases)</li>
    </ul>

    <p><strong>Diagnostic tests</strong>:</p>
    <ul>
        <li>Physical examination and medical history review</li>
        <li>CT or MRI scans to rule out serious conditions</li>
        <li>Blood tests to check for underlying issues</li>
        <li>Neurological examination</li>
    </ul>
    `;

    firstAidDiv.innerHTML = `
    <h4>First Aid</h4>
    <ol>
        <li>Encourage rest in a quiet, dark room.</li>
        <li>Apply a cold compress to the forehead for relief.</li>
        <li>If dehydration is suspected, provide fluids.</li>
        <li>Avoid triggers such as strong lights, loud noises, or stress.</li>
        <li>If pain persists or worsens, seek medical attention promptly.</li>
    </ol>
    `;

    lifestyleChangesDiv.innerHTML = `
    <h4>Lifestyle</h4>
    <p>To manage and reduce headaches:</p>
    <ol>
        <li><strong>Avoid triggers:</strong> Identify and avoid foods, stressors, or environmental factors that trigger headaches.</li>
        <li><strong>Stay hydrated:</strong> Drink plenty of water throughout the day.</li>
        <li><strong>Maintain regular sleep patterns:</strong> Ensure consistent sleep schedules to avoid fatigue-induced headaches.</li>
        <li><strong>Exercise regularly:</strong> Engage in moderate physical activity to reduce stress and improve overall health.</li>
        <li><strong>Avoid excessive caffeine:</strong> Limit caffeine intake as it can both trigger and alleviate headaches depending on usage.</li>
        <li><strong>Practice relaxation techniques:</strong> Use meditation, yoga, or deep breathing exercises to manage stress effectively.</li>
    </ol>

    <p><em>If headaches are severe, recurrent, or accompanied by other concerning symptoms such as vision changes or neurological deficits, consult a healthcare provider immediately.</em></p>
    `;
}        else if (issue.includes('influenza') || issue.includes('Influenza')) {
            diagnosisResult.innerHTML = `
            <h4>Diagnosis</h4>
    <p><strong>Key symptoms</strong> of influenza include:</p>
    <ul>
        <li>Sudden onset of fever</li>
        <li>Cough (usually dry)</li>
        <li>Muscle aches and pain</li>
        <li>Headache</li>
        <li>Fatigue</li>
        <li>Sore throat</li>
        <li>Runny or stuffy nose</li>
    </ul>

    <p><strong>Differential diagnosis</strong> possibilities:</p>
    <ul>
        <li>Common cold</li>
        <li>COVID-19</li>
        <li>Bacterial pneumonia</li>
    </ul>

    <p>Diagnostic methods include:</p>
    <ul>
        <li>Clinical evaluation of symptoms</li>
        <li>Rapid influenza diagnostic tests (RIDTs)</li>
        <li>Reverse transcription polymerase chain reaction (RT-PCR)</li>
        <li>Viral cultures</li>
    </ul>
            `;
            firstAidDiv.innerHTML = `
            <h4>First Aid</h4>
    <ol>
        <li>Rest at home, especially during the first 24 hours after becoming ill.</li>
        <li>Stay hydrated by drinking plenty of fluids like water, electrolyte drinks, or decaffeinated tea.</li>
        <li>Manage fever and pain with acetaminophen (paracetamol) or ibuprofen.</li>
        <li>Use a cool-mist humidifier to relieve coughs and congestion.</li>
        <li>For stuffy nose:
            <ul>
                <li>Adults: Use saline nasal spray</li>
                <li>Infants: Use saline drops and gentle suction with a bulb syringe</li>
            </ul>
        </li>
        <li>Consider antiviral medications if prescribed by a doctor, especially for high-risk individuals.</li>
    </ol>
            `;
            lifestyleChangesDiv.innerHTML = `
            <h4>Lifestyle</h4>
    <p>To manage symptoms and prevent spread:</p>
    <ol>
        <li>Get plenty of rest to support your immune system.</li>
        <li>Stay home until fever-free for at least 24 hours without fever-reducing medication.</li>
        <li>Practice good hygiene:
            <ul>
                <li>Wash hands frequently</li>
                <li>Cover mouth and nose when coughing or sneezing</li>
                <li>Avoid touching face</li>
            </ul>
        </li>
        <li>Eat small, bland meals if experiencing gastrointestinal symptoms.</li>
        <li>Use steam inhalation to soothe nasal passages and loosen mucus.</li>
        <li>Consider using a humidifier to add moisture to indoor air, which may help reduce virus survival.</li>
        <li>For long-term prevention, get the annual flu vaccine as recommended by health authorities.</li>
    </ol>

    <p>Remember, most healthy individuals recover from the flu without complications. However, if symptoms worsen or you're in a high-risk group, consult a healthcare provider promptly.</p>
            `;
        } else if (issue.includes('fever') || issue.includes('Fever') || issue.includes('cold') || issue.includes('Cold')) {
    diagnosisResult.innerHTML = `
    <h4>Diagnosis</h4>
    <p><strong>Key symptoms</strong> of fever include:</p>
    <ul>
        <li>Elevated body temperature (above 37.2–38.3°C or 99.0–100.9°F)</li>
        <li>Chills or shivering</li>
        <li>Sweating</li>
        <li>Headache</li>
        <li>Body aches and fatigue</li>
        <li>Loss of appetite</li>
        <li>Flushed skin or hot sensation</li>
    </ul>

    <p><strong>Differential diagnosis</strong> possibilities:</p>
    <ul>
        <li>Viral infections (e.g., dengue, influenza, COVID-19)</li>
        <li>Bacterial infections (e.g., pneumonia, strep throat)</li>
        <li>Malaria</li>
        <li>Heat exhaustion or hyperthermia</li>
    </ul>

    <p>Diagnostic methods include:</p>
    <ul>
        <li>Measurement of body temperature using a thermometer</li>
        <li>Complete Blood Count (CBC) to identify infection type</li>
        <li>C-Reactive Protein (CRP) test for inflammation levels</li>
        <li>Nasal or throat swabs for viral identification (e.g., RT-PCR)</li>
        <li>Blood cultures to rule out bacterial infections</li>
    </ul>
    `;

    firstAidDiv.innerHTML = `
    <h4>First Aid</h4>
    <ol>
        <li>Rest in a cool, comfortable environment.</li>
        <li>Stay hydrated by drinking plenty of water and electrolyte solutions.</li>
        <li>Use over-the-counter medications like acetaminophen or ibuprofen to reduce fever and alleviate discomfort.</li>
        <li>Avoid heavy clothing; wear lightweight and breathable fabrics.</li>
        <li>If feeling too warm, use a damp cloth on the forehead or take a lukewarm bath.</li>
        <li>If fever persists beyond 3 days or is accompanied by severe symptoms (e.g., difficulty breathing, rash, confusion), seek medical attention immediately.</li>
    </ol>
    `;

    lifestyleChangesDiv.innerHTML = `
    <h4>Lifestyle</h4>
    <p>To manage fever and promote recovery:</p>
    <ol>
        <li>Avoid strenuous activities; prioritize rest.</li>
        <li>Maintain a balanced diet with easily digestible foods like soups and fruits.</li>
        <li>Practice good hygiene to prevent spreading infections:
            <ul>
                <li>Wash hands frequently with soap and water.</li>
                <li>Avoid sharing personal items like towels or utensils.</li>
            </ul>
        </li>
        <li>If fever is due to an infectious disease, isolate yourself to prevent transmission.</li>
        <li>Avoid alcohol and caffeine as they can worsen dehydration.</li>
    </ol>

    <p>If symptoms worsen or new symptoms appear, consult a healthcare provider promptly. Fever is often a sign of the body fighting an infection and usually resolves with proper care.</p>
    `;
}        else if (issue.includes('lyme disease') || issue.includes('Lyme disease')) {
            diagnosisResult.innerHTML = `
            <h4>Diagnosis</h4>
    <p>Diagnosis typically involves:</p>
    <ul>
        <li><strong>Symptoms:</strong> Early signs include a "bull's-eye" rash (erythema migrans), fever, headache, fatigue, muscle and joint aches, and swollen lymph nodes.</li>
        <li><strong>Clinical history:</strong> Exposure to tick-infested areas or known tick bites.</li>
        <li><strong>Blood tests:</strong> Antibody tests may confirm infection but are often unreliable in early stages. Retesting may be required if symptoms persist.</li>
    </ul>

    <p><strong>Differential diagnosis:</strong></p>
    <ol>
        <li><strong>Rocky Mountain Spotted Fever:</strong> Similar flu-like symptoms but with a spotted rash.</li>
        <li><strong>Fibromyalgia or Chronic Fatigue Syndrome:</strong> Persistent fatigue and joint pain but no rash or tick exposure.</li>
        <li><strong>Viral infections (e.g., influenza):</strong> Fever and fatigue without characteristic rash.</li>
    </ol>
            `;
            firstAidDiv.innerHTML = `
            <h4>First Aid</h4>
    <ol>
        <li><strong>Remove the tick promptly:</strong>
            <ul>
                <li>Use clean tweezers to grasp the tick close to the skin and pull straight out gently.</li>
                <li>Do not twist or use substances like petroleum jelly, as this may increase infection risk.</li>
            </ul>
        </li>
        <li><strong>Clean the bite area:</strong>
            <ul>
                <li>Wash with soap and water, then apply an antiseptic or antibiotic ointment.</li>
            </ul>
        </li>
        <li><strong>Monitor for symptoms:</strong>
            <ul>
                <li>Watch for flu-like symptoms or a rash within 30 days of the bite.</li>
            </ul>
        </li>
        <li><strong>Seek medical attention:</strong>
            <ul>
                <li>If you develop a rash or flu-like symptoms, consult a healthcare provider immediately for possible antibiotic treatment.</li>
            </ul>
        </li>
    </ol>
            `;
            lifestyleChangesDiv.innerHTML = `
            <h4>Lifestyle</h4>
    <p>To prevent Lyme disease and support recovery:</p>
    <ol>
        <li><strong>Tick prevention:</strong>
            <ul>
                <li>Wear long sleeves and pants in wooded or grassy areas.</li>
                <li>Use insect repellents containing DEET or permethrin on clothing.</li>
                <li>Perform thorough tick checks after outdoor activities.</li>
            </ul>
        </li>
        <li><strong>Early treatment:</strong>
            <ul>
                <li>Complete prescribed antibiotics (e.g., doxycycline, amoxicillin) to prevent complications like arthritis or neurological issues.</li>
            </ul>
        </li>
        <li><strong>Healthy habits:</strong>
            <ul>
                <li>Maintain a balanced diet rich in fruits, vegetables, and lean proteins to support immune function.</li>
                <li>Stay hydrated to aid recovery.</li>
            </ul>
        </li>
        <li><strong>Exercise caution outdoors:</strong>
            <ul>
                <li>Avoid high-risk areas during peak tick seasons (spring and summer).</li>
            </ul>
        </li>
        <li><strong>Follow up:</strong>
            <ul>
                <li>If symptoms persist after treatment, consult a specialist for further evaluation.</li>
            </ul>
        </li>
    </ol>

    <p>Early diagnosis and treatment are crucial for preventing severe complications associated with Lyme disease.</p>
            `;
        } else if (issue.includes('tuberculosis') || issue.includes('Tuberculosis')) {
            diagnosisResult.innerHTML = `
            <h4>Diagnosis</h4>
    <p><strong>Key symptoms include:</strong></p>
    <ul>
        <li>Persistent cough lasting more than 3 weeks, possibly with blood-tinged sputum</li>
        <li>Fever and night sweats</li>
        <li>Fatigue and weakness</li>
        <li>Unexplained weight loss and loss of appetite</li>
        <li>Chest pain</li>
    </ul>

    <p><strong>Diagnostic methods include:</strong></p>
    <ul>
        <li>Physical examination</li>
        <li>Skin test or blood test to detect TB infection</li>
        <li>Chest X-ray</li>
        <li>Sputum analysis</li>
        <li>Additional tests for extrapulmonary TB in some cases</li>
    </ul>

    <p><strong>Differential diagnosis:</strong></p>
    <ol>
        <li>Pneumonia</li>
        <li>Lung cancer</li>
        <li>Chronic obstructive pulmonary disease (COPD)</li>
    </ol>
            `;
            firstAidDiv.innerHTML = `
            <h4>First Aid</h4>
    <ol>
        <li><strong>Seek immediate medical attention</strong> if TB is suspected.</li>
        <li><strong>Isolate the patient</strong> to prevent spread:
            <ul>
                <li>Use a separate room with good ventilation</li>
                <li>Wear a mask when in contact with others</li>
            </ul>
        </li>
        <li>Cover mouth and nose when coughing or sneezing.</li>
        <li>Dispose of tissues properly in sealed bags.</li>
        <li>Maintain good hand hygiene.</li>
        <li>Start prescribed medications as soon as possible.</li>
    </ol>
            `;
            lifestyleChangesDiv.innerHTML = `
            <h4>Lifestyle</h4>
    <ol>
        <li><strong>Adhere to treatment:</strong> Complete the full course of antibiotics (usually 6-9 months).</li>
        <li><strong>Improve nutrition:</strong>
            <ul>
                <li>Eat a balanced diet rich in fruits, vegetables, whole grains, and lean proteins</li>
                <li>Stay hydrated</li>
            </ul>
        </li>
        <li><strong>Rest and sleep:</strong> Get 7-8 hours of sleep to support immunity.</li>
        <li><strong>Avoid harmful substances:</strong>
            <ul>
                <li>Quit smoking</li>
                <li>Avoid alcohol</li>
            </ul>
        </li>
        <li><strong>Manage stress:</strong> Practice meditation or yoga.</li>
        <li><strong>Improve air quality:</strong>
            <ul>
                <li>Ensure good ventilation</li>
                <li>Consider air purifiers</li>
            </ul>
        </li>
        <li><strong>Exercise:</strong> Engage in mild-moderate activity as symptoms improve.</li>
        <li><strong>Regular check-ups:</strong> Attend all follow-up appointments.</li>
        <li><strong>Hygiene practices:</strong>
            <ul>
                <li>Wash hands frequently</li>
                <li>Cover mouth/nose when coughing</li>
                <li>Avoid close contact during infectious period</li>
            </ul>
        </li>
    </ol>
            `;
        } else if (issue.includes('hiv/aids') || issue.includes('Hiv/aids')) {
            diagnosisResult.innerHTML = `
            <h4>Diagnosis</h4>
    <p><strong>Symptoms:</strong></p>
    <ul>
        <li><strong>Early stage:</strong> Flu-like symptoms (fever, headache, rash, sore throat, fatigue, swollen lymph nodes)</li>
        <li><strong>Advanced stage (AIDS):</strong> Persistent fever, weight loss, chronic diarrhea, night sweats, skin lesions, and recurrent infections</li>
    </ul>

    <p><strong>Testing:</strong></p>
    <ul>
        <li>Blood or saliva tests to detect HIV antibodies/antigens</li>
        <li>PCR tests for viral load</li>
        <li>Repeat testing during the "window period" after exposure</li>
    </ul>

    <p><strong>Differential diagnosis:</strong></p>
    <ol>
        <li>Influenza</li>
        <li>Mononucleosis</li>
        <li>Tuberculosis</li>
    </ol>
`;
            firstAidDiv.innerHTML = `
            <h4>First Aid</h4>
    <ol>
        <li><strong>Post-Exposure Prophylaxis (PEP):</strong>
            <ul>
                <li>Start within 72 hours of potential exposure</li>
                <li>Contact healthcare provider immediately</li>
            </ul>
        </li>
        <li><strong>Supportive care:</strong>
            <ul>
                <li>Hydration and rest</li>
                <li>Acetaminophen for fever management</li>
            </ul>
        </li>
        <li><strong>Emergency signs requiring urgent care:</strong>
            <ul>
                <li>Confusion</li>
                <li>Difficulty breathing</li>
                <li>Persistent high fever</li>
            </ul>
        </li>
        <li><strong>Prevent transmission:</strong>
            <ul>
                <li>Avoid sharing needles/personal items</li>
                <li>Use condoms during sexual activity</li>
            </ul>
        </li>
    </ol>
            `;
            lifestyleChangesDiv.innerHTML = `
            <h4>Lifestyle</h4>
    <ol>
        <li><strong>Adhere to treatment:</strong> Take antiretroviral therapy (ART) as prescribed</li>
        <li><strong>Healthy diet:</strong>
            <ul>
                <li>Nutrient-rich foods (fruits, vegetables, lean proteins)</li>
                <li>Stay hydrated</li>
            </ul>
        </li>
        <li><strong>Exercise:</strong> Regular physical activity for mental/physical health</li>
        <li><strong>Avoid harmful habits:</strong>
            <ul>
                <li>Quit smoking</li>
                <li>Limit alcohol consumption</li>
            </ul>
        </li>
        <li><strong>Prevent infections:</strong>
            <ul>
                <li>Stay updated on vaccinations</li>
                <li>Practice good hygiene</li>
            </ul>
        </li>
        <li><strong>Mental health care:</strong> Counseling/support groups</li>
        <li><strong>Protect others:</strong>
            <ul>
                <li>Consistent condom use</li>
                <li>Encourage partner PrEP consideration</li>
            </ul>
        </li>
    </ol>
            `;
        } else if (issue.includes('hepatitis') || issue.includes('Hepatitis')) {
            diagnosisResult.innerHTML = `
            <h4>Diagnosis</h4>
    <p><strong>Key symptoms include:</strong></p>
    <ul>
        <li>Jaundice (yellowing of skin and eyes)</li>
        <li>Fatigue</li>
        <li>Nausea and vomiting</li>
        <li>Abdominal pain</li>
        <li>Loss of appetite</li>
        <li>Dark urine</li>
        <li>Light-colored stools</li>
        <li>Fever</li>
        <li>Joint pain</li>
    </ul>

    <p><strong>Diagnostic methods include:</strong></p>
    <ul>
        <li>Physical examination</li>
        <li>Blood tests to check liver enzymes and detect viral presence</li>
        <li>Ultrasound of the liver</li>
        <li>Liver biopsy in some cases</li>
    </ul>
            `;
            firstAidDiv.innerHTML = `
            <h4>First Aid</h4>
    <ol>
        <li>Seek immediate medical attention if hepatitis is suspected.</li>
        <li>Rest and avoid strenuous activities.</li>
        <li>Stay hydrated by drinking plenty of fluids.</li>
        <li>Avoid alcohol and medications that can harm the liver.</li>
        <li>Practice good hygiene to prevent transmission:
            <ul>
                <li>Wash hands frequently</li>
                <li>Use disposable gloves when handling blood or bodily fluids</li>
                <li>Clean surfaces with detergent and water after blood spills</li>
            </ul>
        </li>
        <li>If exposed to hepatitis B, seek medical advice within 24 hours for possible immunoglobulin treatment and vaccination.</li>
    </ol>
            `;
            lifestyleChangesDiv.innerHTML = `
            <h4>Lifestyle</h4>
    <p>To manage hepatitis and support liver health:</p>
    <ol>
        <li>Follow prescribed treatment, which may include antiviral medications for chronic cases.</li>
        <li>Eat a balanced, nutritious diet rich in fruits, vegetables, and lean proteins.</li>
        <li>Get adequate rest to support the immune system.</li>
        <li>Avoid alcohol and drugs that can further damage the liver.</li>
        <li>Stay up-to-date with vaccinations, especially for hepatitis A and B.</li>
        <li>Practice safe sex and avoid sharing needles to prevent transmission of hepatitis B and C.</li>
        <li>Manage stress through relaxation techniques or counseling.</li>
        <li>Attend regular follow-up appointments with your healthcare provider to monitor liver function and adjust treatment as needed.</li>
    </ol>

    <p><em>Remember, early detection and proper management are crucial for preventing complications and improving outcomes in hepatitis cases.</em></p>
            `;
        } else if (issue.includes('malaria') || issue.includes('Malaria')) {
            diagnosisResult.innerHTML = `
            <h4>Diagnosis</h4>
    <ul>
        <li>Physical examination and review of symptoms</li>
        <li>Blood tests to detect Plasmodium parasites</li>
        <li>Microscopy or rapid diagnostic tests (RDTs)</li>
        <li>Additional tests to assess complications if needed</li>
    </ul>

    <p><strong>Key symptoms include:</strong></p>
    <ul>
        <li>Fever with chills and sweating</li>
        <li>Fatigue and weakness</li>
        <li>Headache and muscle pain</li>
        <li>Nausea, vomiting, and diarrhea</li>
        <li>Jaundice in some cases</li>
    </ul>
            `;
            firstAidDiv.innerHTML = `
            <h4>First Aid</h4>
    <ol>
        <li>Seek immediate medical attention if malaria is suspected</li>
        <li>Rest and avoid strenuous activities</li>
        <li>Stay hydrated by drinking plenty of fluids</li>
        <li>Avoid alcohol and medications that can harm the liver</li>
        <li>Practice good hygiene to prevent transmission:
            <ul>
                <li>Wash hands frequently</li>
                <li>Use gloves when handling bodily fluids</li>
            </ul>
        </li>
    </ol>
            `;
            lifestyleChangesDiv.innerHTML = `
            <h4>Lifestyle</h4>
    <ol>
        <li>Complete the full course of prescribed antimalarial medications</li>
        <li>Eat a balanced, nutritious diet rich in fruits and vegetables</li>
        <li>Get adequate rest to support the immune system</li>
        <li>Use mosquito nets and insect repellents to prevent reinfection</li>
        <li>Attend follow-up appointments to monitor recovery</li>
        <li>Consider home remedies like ginger tea to alleviate symptoms</li>
        <li>Protect others by preventing mosquito bites during treatment</li>
    </ol>

    <p><em>Early diagnosis and proper treatment are crucial for preventing complications. If you've traveled to a malaria-endemic area and experience symptoms, seek medical care immediately.</em></p>
            `;
        } else if (issue.includes('diabetes') || issue.includes('Diabetes')) {
            diagnosisResult.innerHTML = `
            <h4>Diagnosis</h4>
    <p>Diabetes is diagnosed through blood tests that measure glucose levels:</p>
    <ol>
        <li><strong>A1C test:</strong> Measures average blood glucose over 2-3 months
            <ul>
                <li>Diabetes: ≥ 6.5%</li>
                <li>Prediabetes: 5.7% to 6.4%</li>
                <li>Normal: < 5.7%</li>
            </ul>
        </li>
        <li><strong>Fasting Plasma Glucose (FPG) test:</strong> Measures blood glucose after 8 hours of fasting
            <ul>
                <li>Diabetes: ≥ 126 mg/dL</li>
                <li>Prediabetes: 100-125 mg/dL</li>
                <li>Normal: < 100 mg/dL</li>
            </ul>
        </li>
        <li><strong>Oral Glucose Tolerance Test (OGTT):</strong> Measures blood glucose before and 2 hours after drinking a sweet drink
            <ul>
                <li>Diabetes: ≥ 200 mg/dL at 2 hours</li>
                <li>Prediabetes: 140-199 mg/dL at 2 hours</li>
                <li>Normal: < 140 mg/dL at 2 hours</li>
            </ul>
        </li>
        <li><strong>Random Plasma Glucose Test:</strong> Blood glucose ≥ 200 mg/dL at any time, with severe symptoms</li>
    </ol>
            `;
            firstAidDiv.innerHTML = `
            <h4>First Aid</h4>
    <p>For a diabetic emergency:</p>
    <ol>
        <li>Determine if blood sugar is high or low (if unsure, treat as low)</li>
        <li>For low blood sugar (hypoglycemia):
            <ul>
                <li>Give sugar: fruit juice, regular soft drink, or glucose tablets</li>
                <li>Repeat every 15 minutes until recovery</li>
                <li>Follow with carbohydrates (e.g., sandwich, fruit)</li>
            </ul>
        </li>
        <li>For high blood sugar (hyperglycemia):
            <ul>
                <li>Encourage drinking water</li>
                <li>Assist with medication if requested</li>
            </ul>
        </li>
        <li>If unconscious:
            <ul>
                <li>Call emergency services (911)</li>
                <li>Place in recovery position if breathing</li>
                <li>Do not give anything by mouth</li>
            </ul>
        </li>
        <li>For insulin pump users:
            <ul>
                <li>Do not touch or adjust the pump</li>
                <li>Treat hypoglycemia as above</li>
            </ul>
        </li>
    </ol>
            `;
            lifestyleChangesDiv.innerHTML = `
            <h4>Lifestyle</h4>
    <p>To manage diabetes:</p>
    <ol>
        <li>Eat a balanced diet:
            <ul>
                <li>Focus on vegetables, fruits, whole grains, lean proteins</li>
                <li>Limit high-sugar and high-fat foods</li>
                <li>Monitor carbohydrate intake</li>
            </ul>
        </li>
        <li>Exercise regularly:
            <ul>
                <li>Aim for 30 minutes of moderate activity, 5 days a week</li>
            </ul>
        </li>
        <li>Monitor blood glucose levels as recommended by your doctor</li>
        <li>Take medications as prescribed</li>
        <li>Maintain a healthy weight</li>
        <li>Manage stress through relaxation techniques</li>
        <li>Stay hydrated</li>
        <li>Attend regular check-ups with your healthcare provider</li>
    </ol>

    <p>By following these lifestyle changes and working closely with a healthcare team, individuals with diabetes can effectively manage their condition and reduce the risk of complications.</p>
            `;
        } else if (issue.includes('high blood pressure') || issue.includes('High blood pressure') || issue.includes('High bloodpressure') || issue.includes('High BP') || issue.includes('High bp') || issue.includes('hypertension') || issue.includes('Hypertension')) {
            diagnosisResult.innerHTML = `
            <h4>Diagnosis</h4>
    <p>Hypertension is diagnosed through blood pressure measurements:</p>
    <ul>
        <li><strong>Normal:</strong> Less than 120/80 mm Hg</li>
        <li><strong>Elevated:</strong> 120-129 mm Hg systolic and less than 80 mm Hg diastolic</li>
        <li><strong>Stage 1 Hypertension:</strong> 130-139 mm Hg systolic or 80-89 mm Hg diastolic</li>
        <li><strong>Stage 2 Hypertension:</strong> 140 mm Hg or higher systolic or 90 mm Hg or higher diastolic</li>
    </ul>
    <p>Diagnosis typically requires multiple readings on separate occasions. Additional tests may include blood and urine tests, ECG, and eye exams to assess organ damage.</p>
            `;
            firstAidDiv.innerHTML = `
            <h4>First Aid</h4>
    <p><strong>For a hypertensive emergency (blood pressure >180/>120 mm Hg with symptoms of organ damage):</strong></p>
    <ol>
        <li>Call emergency services immediately.</li>
        <li>Help the person sit down and stay calm.</li>
        <li>Loosen tight clothing.</li>
        <li>Monitor their condition until help arrives.</li>
    </ol>

    <p><strong>For less severe cases:</strong></p>
    <ol>
        <li>Encourage rest and relaxation.</li>
        <li>Avoid caffeine and alcohol.</li>
        <li>Take prescribed medications as directed.</li>
        <li>Seek medical attention if symptoms worsen.</li>
    </ol>
            `;
            lifestyleChangesDiv.innerHTML = `
            <h4>Lifestyle</h4>
    <p>To manage hypertension and reduce risk:</p>
    <ol>
        <li><strong>Regular physical activity:</strong> Aim for 150 minutes of moderate-intensity exercise per week.</li>
        <li><strong>Healthy diet:</strong> Follow the DASH (Dietary Approaches to Stop Hypertension) diet, rich in fruits, vegetables, whole grains, and low-fat dairy.</li>
        <li><strong>Reduce sodium intake:</strong> Limit to 1,500 mg per day for most adults.</li>
        <li><strong>Maintain a healthy weight:</strong> Losing excess weight can significantly lower blood pressure.</li>
        <li><strong>Limit alcohol consumption:</strong> No more than 1 drink per day for women, 2 for men.</li>
        <li><strong>Quit smoking:</strong> Smoking damages blood vessels and increases hypertension risk.</li>
        <li><strong>Manage stress:</strong> Practice relaxation techniques like deep breathing or meditation.</li>
        <li><strong>Ensure adequate sleep:</strong> Aim for 7-9 hours of quality sleep per night.</li>
    </ol>

    <p><em>By adopting these lifestyle changes and working closely with healthcare providers, individuals can effectively manage hypertension and reduce the risk of complications such as heart disease and stroke.</em></p>
            `;
        } else if (issue.includes('arthritis') || issue.includes('Arthritis')) {
            diagnosisResult.innerHTML = `
            <h4>Diagnosis</h4>
    <p>Diagnosis typically includes:</p>
    <ul>
        <li><strong>Symptoms:</strong> Persistent joint pain, swelling, stiffness (especially in the morning), difficulty moving joints, and redness or warmth over affected areas.</li>
        <li><strong>Physical examination:</strong> Doctors assess joint tenderness, range of motion, and signs of inflammation.</li>
        <li><strong>Imaging tests:</strong> X-rays, MRIs, or CT scans may reveal joint damage or cartilage loss.</li>
        <li><strong>Lab tests:</strong> Blood tests for rheumatoid factor (RF), anti-CCP antibodies, or urinalysis may help differentiate types of arthritis.</li>
    </ul>

    <h5>Differential Diagnosis</h5>
    <ol>
        <li><strong>Rheumatoid arthritis (RA):</strong> Autoimmune condition causing symmetrical joint inflammation and systemic symptoms like fatigue and fever.</li>
        <li><strong>Osteoarthritis (OA):</strong> Degenerative joint disease with cartilage loss; affects weight-bearing joints like knees and hips.</li>
        <li><strong>Psoriatic arthritis (PsA):</strong> Associated with psoriasis; may cause joint pain and skin lesions.</li>
    </ol>
            `;
            firstAidDiv.innerHTML = `
            <h4>First Aid</h4>
    <p>For arthritis flare-ups or emergencies:</p>
    <ol>
        <li><strong>Rest the affected joint:</strong> Avoid overuse to reduce pain and inflammation.</li>
        <li><strong>Apply heat or cold therapy:</strong>
            <ul>
                <li>Heat packs loosen stiff joints.</li>
                <li>Ice packs reduce swelling and pain.</li>
            </ul>
        </li>
        <li><strong>Use over-the-counter pain relievers:</strong> Paracetamol or ibuprofen can provide temporary relief.</li>
        <li><strong>Support the joint:</strong> Use splints, braces, or assistive devices like canes for mobility issues.</li>
    </ol>
    <p><em>Seek medical attention if symptoms worsen or if there are signs of infection (e.g., fever with swollen joints).</em></p>
            `;
            lifestyleChangesDiv.innerHTML = `
            <h4>Lifestyle</h4>
    <p>To manage arthritis effectively:</p>

    <h5>Diet</h5>
    <ul>
        <li>Follow a Mediterranean-style diet rich in fruits, vegetables, whole grains, nuts, olive oil, and fatty fish to reduce inflammation.</li>
        <li>Include anti-inflammatory foods like garlic, beans, citrus fruits, and nuts.</li>
        <li>Avoid processed foods and excess sugar.</li>
    </ul>

    <h5>Exercise</h5>
    <ul>
        <li>Engage in low-impact activities like swimming, walking, yoga, or cycling to improve joint flexibility and strength.</li>
        <li>Perform range-of-motion exercises to prevent stiffness.</li>
    </ul>

    <h5>Weight Management</h5>
    <p>Maintain a healthy weight to reduce stress on weight-bearing joints like knees and hips.</p>

    <h5>Stress Management</h5>
    <p>Practice relaxation techniques such as meditation or deep breathing to reduce flare-ups triggered by stress.</p>

    <h5>Avoid Harmful Habits</h5>
    <ul>
        <li>Quit smoking as it worsens inflammation and damages connective tissues.</li>
        <li>Limit alcohol intake to prevent interactions with arthritis medications.</li>
    </ul>

    <p><em>By combining medical treatments with these lifestyle adjustments, individuals can better manage arthritis symptoms and improve their quality of life.</em></p>
            `;
        } else if (issue.includes('cancer') || issue.includes('Cancer')) {
            diagnosisResult.innerHTML = `
            <h4>Diagnosis</h4>
    <p>Diagnosis typically involves:</p>
    <ul>
        <li><strong>Symptoms:</strong> Common signs include unexplained weight loss, persistent fatigue, lumps or swelling, abnormal bleeding, chronic pain, and changes in bowel or bladder habits.</li>
        <li><strong>Tests:</strong>
            <ul>
                <li>Imaging (X-rays, CT scans, MRI) to detect tumors</li>
                <li>Blood tests for tumor markers</li>
                <li>Biopsy to confirm the presence of cancer cells</li>
            </ul>
        </li>
    </ul>

    <h5>Differential Diagnosis</h5>
    <ol>
        <li><strong>Benign tumors:</strong> Non-cancerous growths that may mimic cancer symptoms</li>
        <li><strong>Infections:</strong> Chronic infections like tuberculosis can cause similar symptoms (e.g., fever, weight loss)</li>
        <li><strong>Autoimmune diseases:</strong> Conditions like lupus may present with fatigue and joint pain</li>
    </ol>
            `;
            firstAidDiv.innerHTML = `
            <h4>First Aid</h4>
    <p>For emergencies related to cancer or its treatment:</p>
    <ol>
        <li><strong>Manage neutropenic fever:</strong>
            <ul>
                <li>If the patient has a fever during chemotherapy, seek immediate medical care</li>
            </ul>
        </li>
        <li><strong>CPR for cardiac events:</strong>
            <ul>
                <li>Administer CPR and use an AED if the patient has heart-related complications due to chemotherapy</li>
            </ul>
        </li>
        <li><strong>Control bleeding:</strong>
            <ul>
                <li>Apply gentle pressure to any bleeding site and seek emergency care if bleeding persists</li>
            </ul>
        </li>
        <li><strong>Provide emotional support:</strong>
            <ul>
                <li>Reassure the patient and help them stay calm during emergencies</li>
            </ul>
        </li>
    </ol>
            `;
            lifestyleChangesDiv.innerHTML = `
            <h4>Lifestyle</h4>
    <p>To support cancer treatment and recovery:</p>
    <ol>
        <li><strong>Nutrition:</strong>
            <ul>
                <li>Eat a balanced diet rich in fruits, vegetables, whole grains, lean proteins, and healthy fats</li>
                <li>Avoid processed foods, red meats, and sugary drinks</li>
            </ul>
        </li>
        <li><strong>Physical Activity:</strong>
            <ul>
                <li>Engage in moderate exercise like walking or yoga to reduce fatigue</li>
            </ul>
        </li>
        <li><strong>Hydration:</strong> Drink plenty of water to manage side effects like nausea or diarrhea</li>
        <li><strong>Stress Management:</strong> Practice relaxation techniques such as meditation or mindfulness</li>
        <li><strong>Quit Smoking and Limit Alcohol:</strong>
            <ul>
                <li>Smoking increases the risk of secondary cancers</li>
                <li>Limit alcohol consumption as it can interfere with recovery</li>
            </ul>
        </li>
        <li><strong>Adequate Rest:</strong> Ensure consistent sleep patterns to support healing</li>
        <li><strong>Prevent infections:</strong> Maintain good hygiene and avoid exposure to sick individuals during treatment</li>
    </ol>

    <p><em>By adopting these lifestyle changes alongside medical care, individuals can improve their quality of life and enhance treatment outcomes during their cancer journey.</em></p>
            `;
        } else if (issue.includes('asthma') || issue.includes('Asthma') || issue.includes('asthama') || issue.includes('Asthama')) {
            diagnosisResult.innerHTML = `
            <h4>Diagnosis</h4>
    <p>Asthma is diagnosed through:</p>
    <ul>
        <li>Physical examination and medical history review</li>
        <li>Lung function tests:
            <ul>
                <li>Spirometry: Measures how much and how fast you can exhale</li>
                <li>Peak flow: Assesses how well your lungs push out air</li>
            </ul>
        </li>
        <li>Methacholine challenge test: Evaluates airway responsiveness</li>
        <li>Imaging tests like chest X-rays</li>
        <li>Allergy testing</li>
    </ul>
            `;
            firstAidDiv.innerHTML = `
            <h4>First Aid</h4>
    <p>For an asthma attack:</p>
    <ol>
        <li>Sit the person upright and stay calm</li>
        <li>Give 4 separate puffs of blue/grey reliever inhaler:
            <ul>
                <li>Shake the inhaler</li>
                <li>Take 1 puff at a time</li>
                <li>Breathe 4 times from the spacer for each puff</li>
            </ul>
        </li>
        <li>Wait 4 minutes</li>
        <li>If no improvement, give 4 more puffs</li>
        <li>If still no improvement, call emergency services (dial 000 or local equivalent)</li>
        <li>Continue giving 4 puffs every 4 minutes until help arrives</li>
    </ol>
            `;
            lifestyleChangesDiv.innerHTML = `
            <h4>Lifestyle</h4>
    <p>To manage asthma:</p>
    <ol>
        <li>Identify and avoid triggers</li>
        <li>Follow a treatment plan prescribed by your doctor</li>
        <li>Use medications as directed:
            <ul>
                <li>Quick-relief inhalers for immediate symptom relief</li>
                <li>Long-term control medications to reduce inflammation</li>
            </ul>
        </li>
        <li>Monitor symptoms and peak flow regularly</li>
        <li>Maintain a healthy diet and exercise routine</li>
        <li>Quit smoking and avoid secondhand smoke</li>
        <li>Get vaccinated against flu and pneumonia</li>
        <li>Manage stress through relaxation techniques</li>
    </ol>

    <p>By following these guidelines and working closely with healthcare providers, individuals with asthma can effectively manage their condition and improve their quality of life.</p>
            `;
        } else if (issue.includes('heart attack') || issue.includes('Heart attack') || issue.includes('heartattack') || issue.includes('Heartattack')) {
            diagnosisResult.innerHTML = `
            <h4>Symptoms</h4>
    <p>Key signs of a heart attack include:</p>
    <ul>
        <li>Chest discomfort or pain, often described as pressure, squeezing, or fullness</li>
        <li>Pain or discomfort in the arms, back, neck, jaw, or stomach</li>
        <li>Shortness of breath</li>
        <li>Cold sweat, nausea, or lightheadedness</li>
    </ul>
    <p>Women may experience less typical symptoms such as back pain, shortness of breath, nausea, and fatigue.</p>
            `;
            firstAidDiv.innerHTML = `
            <h4>First Aid</h4>
    <p>If you suspect someone is having a heart attack:</p>
    <ol>
        <li>Call emergency services immediately (911 or local equivalent)</li>
        <li>Help the person sit down and stay calm</li>
        <li>Assist with taking prescribed heart medication if available</li>
        <li>If the person is unconscious and not breathing, begin CPR</li>
        <li>Use an automated external defibrillator (AED) if available</li>
    </ol>
            `;
            lifestyleChangesDiv.innerHTML = `
            <h4>Prevention</h4>
    <p>To reduce the risk of heart attack:</p>
    <ol>
        <li>Don't smoke</li>
        <li>Eat a heart-healthy diet rich in fruits, vegetables, whole grains, and lean proteins</li>
        <li>Maintain a healthy weight and waist circumference</li>
        <li>Limit alcohol consumption</li>
        <li>Exercise regularly</li>
        <li>Manage stress</li>
        <li>Control blood pressure and cholesterol levels</li>
        <li>Get regular health check-ups</li>
    </ol>

    <p>By adopting these lifestyle changes, you can significantly reduce your risk of heart attack and improve overall heart health.</p>
            `;
        } else if (issue.includes('cut') || issue.includes('wound')) {
            diagnosisResult.innerHTML = `<h3>Diagnosis of a Cut/Wound</h3> <p>To determine the severity of a cut or wound, consider the following:</p> <ul> <li><strong>Minor Cuts</strong>: Shallow, small cuts that stop bleeding with pressure and do not expose fat or muscle tissue.</li> <li><strong>Serious Wounds</strong>: Deep cuts, heavy bleeding, puncture wounds, animal bites, or wounds with embedded debris. Seek immediate medical attention if blood spurts or does not stop after applying pressure for 20–30 minutes.</li> </ul>`;
            firstAidDiv.innerHTML = `<h3>First Aid for Cuts/Wounds</h3> <p>Follow these steps for proper first aid:</p> <ol> <li><strong>Wash Hands</strong>: Clean your hands thoroughly before treating the wound to prevent infection.</li> <li><strong>Stop Bleeding</strong>: <ul> <li>Apply firm pressure using a clean cloth or gauze.</li> <li>Elevate the injured area above heart level to reduce blood flow.</li> </ul> </li> <li><strong>Clean the Wound</strong>: <ul> <li>Rinse with clean water to remove dirt and debris.</li> <li>Avoid using harsh antiseptics like hydrogen peroxide or iodine as they may irritate tissues.</li> </ul> </li> <li><strong>Apply Antibiotic Ointment</strong> (optional): Use ointments like Neosporin to reduce infection risk.</li> <li><strong>Cover the Wound</strong>: <ul> <li>Use a sterile bandage or gauze pad.</li> <li>Change the dressing daily or when it becomes wet or dirty.</li> </ul> </li> <li><strong>Seek Medical Attention</strong> for deep wounds, signs of infection, or if tetanus vaccination is outdated.</li> </ol>`;
            lifestyleChangesDiv.innerHTML = `<h3>Lifestyle Changes for Faster Healing</h3> <ol> <li><strong>Nutrition</strong>: <ul> <li>Consume foods rich in vitamin C (citrus fruits, broccoli) and zinc (seafood, beans) to promote collagen formation and wound healing.</li> <li>Include protein at every meal to support tissue repair.</li> </ul> </li> <li><strong>Hydration</strong>: Drink plenty of water to aid cellular repair and regeneration.</li> <li><strong>Quit Smoking</strong>: Smoking reduces oxygen supply and delays healing.</li> <li><strong>Exercise</strong>: Regular physical activity improves blood flow and overall health.</li> <li><strong>Avoid Alcohol</strong>: Excessive alcohol consumption can impair healing.</li> </ol> <h3>Additional Tips</h3> <ul> <li>Keep wounds clean and moist to prevent scarring and promote healing.</li> <li>Avoid scratching or picking scabs to minimize scar formation.</li> <li>Manage chronic conditions like diabetes to improve healing outcomes.</li> </ul>`;
        } else {
            firstAidDiv.innerHTML = '<p>No specific recommendations available. Please consult a healthcare professional.</p>';
            lifestyleChangesDiv.innerHTML = '';
        }
    }, 2000);
    });
});

function showLocationPopup() {
    document.getElementById('locationPopup').style.display = 'block';
  }
  
  function hideLocationPopup() {
    document.getElementById('locationPopup').style.display = 'none';
  }
  
  function handlePermission() {
    navigator.permissions.query({ name: 'geolocation' }).then((result) => {
      if (result.state === 'granted') {
        getLocation();
      } else if (result.state === 'prompt') {
        showLocationPopup();
      } else {
        console.log('Geolocation permission denied');
      }
    });
  }
  
  function getLocation() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log('Latitude:', position.coords.latitude);
        console.log('Longitude:', position.coords.longitude);
      },
      (error) => {
        console.log('Error:', error.message);
      }
    );
  }
  
  document.getElementById('allowLocation').addEventListener('click', () => {
    hideLocationPopup();
    getLocation();
  });
  
  document.getElementById('denyLocation').addEventListener('click', () => {
    hideLocationPopup();
    console.log('Location access denied by user');
  });
  
  // Call this function when you want to request location access
  handlePermission();
  

// Find Nearby Facilities
const findFacilitiesBtn = document.getElementById('find-facilities');
const facilityList = document.getElementById('facility-list');

findFacilitiesBtn.addEventListener('click', function () {
    // Simulate fetching nearby facilities (replace with real API call)
    setTimeout(() => {
        facilityList.innerHTML = `
            <ul>
                <li><strong>City Hospital</strong> - 2.5 km away</li>
                <li><strong>Community Clinic</strong> - 1.8 km away</li>
                <li><strong>Emergency Care Center</strong> - 3.2 km away</li>
            </ul>
        `;
    }, 1000);
});

// Real-Time Hospital Information
// Wait for the DOM to fully load before executing the script
document.addEventListener("DOMContentLoaded", function () {
    // Sample hospital data (can be replaced with real-time API data)
    const hospitalData = [
        {
            name: "City General Hospital",
            address: "123 Main Street, Springfield",
            distance: "2.5 km",
            bedsAvailable: 12,
            contact: "555-1234",
            rating: 4.5,
        },
        {
            name: "Springfield Medical Center",
            address: "456 Elm Street, Springfield",
            distance: "3.8 km",
            bedsAvailable: 8,
            contact: "555-5678",
            rating: 4.2,
        },
        {
            name: "Downtown Health Clinic",
            address: "789 Pine Avenue, Springfield",
            distance: "1.2 km",
            bedsAvailable: 5,
            contact: "555-9012",
            rating: 4.8,
        },
    ];

    // Get the container element where hospital cards will be displayed
    const container = document.getElementById("hospital-info");

    // Check if container exists
    if (!container) {
        console.error("Container element with ID 'hospital-info' not found.");
        return;
    }

    // Loop through each hospital and create a card dynamically
    hospitalData.forEach((hospital) => {
        // Create a new div for each hospital card
        const card = document.createElement("div");
        card.classList.add("hospital-card");

        // Populate the card with hospital details using template literals
        card.innerHTML = `
            <h3 class="hospital-name">${hospital.name}</h3>
            <p><strong>Address:</strong> ${hospital.address}</p>
            <p><strong>Distance:</strong> ${hospital.distance}</p>
            <p><strong>Beds Available:</strong> ${hospital.bedsAvailable}</p>
            <p><strong>Contact:</strong> ${hospital.contact}</p>
            <p><strong>Rating:</strong> ${hospital.rating} ★</p>
        `;

        // Append the card to the container
        container.appendChild(card);
    });
});

// JavaScript for Emergency Booking Section

document.addEventListener("DOMContentLoaded", function () {
    const bookingForm = document.getElementById("booking-form");

    if (bookingForm) {
        // Handle form submission
        bookingForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent form from redirecting or refreshing

            // Get form values
            const userName = document.getElementById("user-name").value.trim();
            const userContact = document.getElementById("user-contact").value.trim();
            const bookingType = document.getElementById("booking-type").value;
            const bookingDetails = document.getElementById("booking-details").value.trim();

            // Validate form inputs
            if (!userName || !userContact || !bookingType) {
                alert("Please fill out all required fields.");
                return;
            }

            // Store booking details in localStorage (or you could use sessionStorage)
            localStorage.setItem('bookingDetails', JSON.stringify({
                name: userName,
                contact: userContact,
                service: bookingType,
                details: bookingDetails
            }));

            // Redirect to payment options page
            // window.location.href = 'payment-options.html';
            window.location.replace('payment-options.html');

        });
    }
});


// Function to display a popup message
function showPopup(message) {
    // Create popup elements
    const popup = document.createElement("div");
    popup.id = "popup-message";
    popup.style.position = "fixed";
    popup.style.top = "50%";
    popup.style.left = "50%";
    popup.style.transform = "translate(-50%, -50%)";
    popup.style.backgroundColor = "#fff";
    popup.style.padding = "20px";
    popup.style.borderRadius = "8px";
    popup.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
    popup.style.textAlign = "center";
    popup.style.zIndex = "1000";

    const messageText = document.createElement("p");
    messageText.textContent = message;
    messageText.style.marginBottom = "20px";

    const closeButton = document.createElement("button");
    closeButton.textContent = "Close";
    closeButton.style.padding = "10px 15px";
    closeButton.style.border = "none";
    closeButton.style.backgroundColor = "#007bff";
    closeButton.style.color = "#fff";
    closeButton.style.borderRadius = "5px";
    closeButton.style.cursor = "pointer";

    // Close button functionality
    closeButton.addEventListener("click", function () {
        document.body.removeChild(popup);
    });

    // Append elements to the popup
    popup.appendChild(messageText);
    popup.appendChild(closeButton);

    // Append the popup to the body
    document.body.appendChild(popup);
}

// Geolocation for Facility Finder
const locationStatus = document.getElementById('locationStatus');
// const facilityList = document.getElementById('facilityList');
let map, marker;

function getLocation() {
    if (navigator.geolocation) {
        locationStatus.textContent = 'Locating...';
        navigator.geolocation.getCurrentPosition(showPosition, showError, {
            enableHighAccuracy: true,
            timeout: 5000,
            maximumAge: 0
        });
    } else {
        locationStatus.textContent = "Geolocation is not supported by this browser.";
    }
}

function showPosition(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    locationStatus.textContent = `Located at: ${lat.toFixed(4)}, ${lon.toFixed(4)}`;
    
    // Initialize/update map
    initMap(lat, lon);
    
    // Fetch nearby facilities
    fetchNearbyFacilities(lat, lon);
}

function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            locationStatus.textContent = "User denied the request for Geolocation.";
            break;
        case error.POSITION_UNAVAILABLE:
            locationStatus.textContent = "Location information is unavailable.";
            break;
        case error.TIMEOUT:
            locationStatus.textContent = "The request to get user location timed out.";
            break;
        case error.UNKNOWN_ERROR:
            locationStatus.textContent = "An unknown error occurred.";
            break;
    }
}

function initMap(lat, lon) {
    if (!map) {
        map = L.map('map').setView([lat, lon], 13);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);
        marker = L.marker([lat, lon]).addTo(map);
    } else {
        map.setView([lat, lon], 13);
        marker.setLatLng([lat, lon]);
    }
}

function fetchNearbyFacilities(lat, lon) {
    const facilityList = document.getElementById('facilityList');
    facilityList.innerHTML = '<p>Fetching nearby facilities...</p>';

    const apiKey = "YOUR_API_KEY"; // Replace with your actual API key
    const apiUrl = `https://api.setu.in/api/setu/hospitals?lat=${lat}&lon=${lon}`; // Replace with the actual API Setu endpoint

    fetch(apiUrl, {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${apiKey}`, // If API Setu requires an API key in the header
            'Content-Type': 'application/json' // Adjust content type as needed
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        displayFacilities(data);
    })
    .catch(error => {
        facilityList.innerHTML = '<p>Error fetching facilities. Please try again.</p>';
        console.error('Error:', error);
    });
}


function displayFacilities(facilities) {
    if (facilities.length === 0) {
        facilityList.innerHTML = '<p>No facilities found nearby.</p>';
        return;
    }

    let html = '<ul>';
    facilities.forEach(facility => {
        html += `<li>${facility.name} - ${facility.distance.toFixed(2)} km</li>`;
    });
    html += '</ul>';
    facilityList.innerHTML = html;
}

// Event listener for the location button
document.getElementById('getLocationBtn').addEventListener('click', getLocation);


// // Geolocation for Facility Finder
// function getLocation() {
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(showPosition, showError);
//     } else {
//         alert("Geolocation is not supported by this browser.");
//     }
// }

// function showPosition(position) {
//     const lat = position.coords.latitude;
//     const lon = position.coords.longitude;
//     alert(`Your location: Latitude: ${lat}, Longitude: ${lon}`);
        
//     // Use this location data to fetch nearby facilities from an API
//     // Example: fetch(`https://api.example.com/facilities?lat=${lat}&lon=${lon}`)
// } 
  
// Function to toggle FAQ visibility
function toggleFAQ(element) {
    const faqItem = element.parentElement;
    faqItem.classList.toggle('active');
}

function showError(error) {
    switch (error.code) {
        case error.PERMISSION_DENIED:
            alert("User denied the request for Geolocation.");
            break;
        case error.POSITION_UNAVAILABLE:
             alert("Location information is unavailable.");
             break;
        case error.TIMEOUT:
            alert("The request to get user location timed out.");
               break;
        case error.UNKNOWN_ERROR:
            alert("An unknown error occurred.");
            break;
    }
}

// Call getLocation when "Find Nearby Facilities" is clicked
findFacilitiesBtn.addEventListener('click', getLocation);

// Contact Form Submission
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    alert("Thank you for reaching out! We will get back to you shortly.");
    contactForm.reset();
});

// Newsletter Subscription Form Submission
const newsletterForm = document.getElementById('newsletter-form');

newsletterForm.addEventListener('submit', function (e) {
    e.preventDefault();
    alert("Thank you for subscribing to our newsletter!");
    newsletterForm.reset();
});
