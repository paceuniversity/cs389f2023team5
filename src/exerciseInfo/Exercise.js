import React, { useState } from "react";
import body from "../body.png";

const Exercise = () => {
  const [selectedPart, setSelectedPart] = useState(null);

  const handleAreaClick = (part) => {
    setSelectedPart((prevSelectedPart) =>
      prevSelectedPart === part ? null : part
    );
  };

  const handleClosePopup = () => {
    setSelectedPart(null);
  };

  return (
    <div
      className="muscles"
      style={{ position: "relative", textAlign: "center" }}
    >
      <img
        src={body}
        alt="Human Body"
        useMap="#bodyMap"
        style={{
          cursor: "pointer",
          width: "900px",
          height: "auto",
          margin: "auto",
        }}
      />

      <map name="bodyMap">
        <area
          shape="poly"
          coords="143,231,153,243,152,266,145,293,138,314,117,339,108,306,107,281,114,257,125,251,136,243"
          alt="Biceps"
          onClick={() => handleAreaClick("Biceps")}
        />
        <area
          shape="poly"
          coords="307,230,298,244,300,267,307,291,315,314,335,340,343,307,344,278,336,254,324,250,314,241"
          alt="Biceps"
          onClick={() => handleAreaClick("Biceps")}
        />
        <area
          shape="poly"
          coords="539,326,528,300,531,271,537,251,554,237,575,229,579,250,583,267,572,290,565,314,547,326,562,289,562,274,551,285"
          alt="Triceps"
          onClick={() => handleAreaClick("Triceps")}
        />
        <area
          shape="poly"
          coords="765,328,777,301,774,271,768,250,752,237,729,226,725,250,721,269,734,294,741,317,757,325,742,286,742,273,753,285"
          alt="Triceps"
          onClick={() => handleAreaClick("Triceps")}
        />
        <area
          shape="poly"
          coords="224,205,223,227,219,248,206,259,191,263,177,265,164,254,152,242,145,230,151,214,165,202,184,194,203,191,217,194"
          alt="Chest"
          onClick={() => handleAreaClick("Chest")}
        />
        <area
          shape="poly"
          coords="227,208,229,231,235,251,247,259,263,264,279,262,290,253,301,242,307,228,299,212,288,202,271,194,254,191,235,194"
          alt="Chest"
          onClick={() => handleAreaClick("Chest")}
        />
        <area
          shape="poly"
          coords="580,181,597,182,613,179,629,173,638,181,647,191,652,210,656,191,665,181,674,173,688,178,704,182,724,181,722,190,
          702,192,718,206,722,220,728,226,722,265,715,293,709,306,694,332,680,373,671,368,656,303,655,301,652,216,650,301,648,303,
          635,368,623,372,612,336,595,306,588,286,583,267,574,230,583,221,584,207,602,193,583,188"
          alt="Back"
          onClick={() => handleAreaClick("Back")}
        />
        <area
          shape="poly"
          coords="169,404,176,445,185,471,197,503,190,523,179,544,172,570,167,570,162,547,152,520,147,478,152,459,161,449,166,432"
          alt="Quadriceps"
          onClick={() => handleAreaClick("Quadriceps")}
        />
        <area
          shape="poly"
          coords="282,404,279,435,269,469,253,503,264,526,274,546,279,571,284,571,292,545,302,511,305,483,301,461,291,447,286,432"
          alt="Quadriceps"
          onClick={() => handleAreaClick("Quadriceps")}
        />
        <area
          shape="poly"
          coords="632,479,594,492,590,482,579,516,571,566,575,611,576,635,599,579,603,602,613,622,617,643,628,622,626,579,624,549,
          629,537,626,504"
          alt="Hamstrings"
          onClick={() => handleAreaClick("Hamstrings")}
        />
        <area
          shape="poly"
          coords="672,479,709,492,714,482,726,518,734,571,729,612,729,637,719,612,705,578,703,598,693,621,686,642,676,624,681,549,
          678,532,679,504"
          alt="Hamstrings"
          onClick={() => handleAreaClick("Hamstrings")}
        />
        <area
          shape="poly"
          coords="585,611,594,624,600,648,607,637,613,624,621,652,627,679,618,709,608,728,599,729,593,726,593,715,584,718,575,715,
          583,767,571,785,575,763,566,704,565,671,570,650"
          alt="Calves"
          onClick={() => handleAreaClick("Calves")}
        />
        <area
          shape="poly"
          coords="718,612,708,628,705,655,698,637,690,623,683,652,678,679,685,704,696,729,704,729,712,727,713,717,721,719,728,715,
          722,766,737,789,728,760,739,698,739,664,731,640"
          alt="Calves"
          onClick={() => handleAreaClick("Calves")}
        />
        {/* Add more areas as needed for different body parts */}
      </map>

      {selectedPart && (
        <div
          className="popup-container"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: "rgba(255, 255, 255, 0.8)",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            className="popup"
            style={{
              maxWidth: "600px",
              padding: "20px",
              background: "#fff",
              borderRadius: "8px",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
            }}
          >
            {/* Close button */}
            <button
              onClick={handleClosePopup}
              style={{
                position: "absolute",
                top: "10px",
                right: "10px",
                cursor: "pointer",
                background: "none",
                border: "none",
                fontSize: "16px",
                fontWeight: "bold",
              }}
            >
              X
            </button>

            {/* Popup content */}
            {`Selected Part: ${selectedPart}`}
            {selectedPart === "Biceps" && (
              <>
                <br />
                <p />
                <a
                  href="https://www.youtube.com/watch?v=kwG2ipFRgfo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Barbell Curls
                </a>
                <p>
                  {" "}
                  - A barbell curl is a variation of the biceps curl that uses a
                  weighted barbell. Perform barbell curls by grabbing a barbell
                  with a shoulder-width supinated grip (palms facing towards
                  your body). Hinge your elbows, and lift the barbell toward
                  your chest.
                </p>
                <br />
                <a
                  href="https://www.youtube.com/watch?v=Ja6ZlIDONac"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Preacher Curls
                </a>
                <p>
                  {" "}
                  - A preacher curl is a weightlifting exercise for the biceps
                  in which a barbell is lifted by flexing the elbows, with the
                  upper arms resting on an angled bench.
                </p>
                <br />
                <a
                  href="https://www.youtube.com/watch?v=opFVuRi_3b8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Cable Curls
                </a>
                <p>
                  {" "}
                  - Cable curls use the cable machines to train the biceps. As
                  with all bicep curl variations, the aim of the cable curl is
                  to lift the load by bending at the elbow and curling the
                  weight towards the shoulders.
                </p>
              </>
            )}
            {selectedPart === "Triceps" && (
              <>
                <br />
                <p />
                <a
                  href="https://www.youtube.com/watch?v=YbX7Wd8jQ-Q"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Overhead Triceps Extension
                </a>
                <p>
                  {" "}
                  - The main function of the triceps is to extend the elbow,
                  moving the forearm away from the upper arm. The overhead
                  tricep extension trains this movement in an overhead position,
                  targeting all heads of the tricep with a particular focus on
                  the long head, and helping to strengthen shoulder stability.
                </p>
                <br />
                <a
                  href="https://www.youtube.com/watch?v=6SS6K3lAwZ8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Tricep Kickback
                </a>
                <p>
                  {" "}
                  - The tricep kickback is an isolation exercise focused on the
                  triceps brachii muscle (which is made up of a lateral head,
                  medial head, and long head) in the back of your arm. Perform
                  tricep kickbacks by bending forward and lifting your arms
                  behind you.
                </p>
                <br />
                <a
                  href="https://www.youtube.com/watch?v=6kALZikXxLc"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Tricep Dip
                </a>
                <p>
                  {" "}
                  - An exercise to make your triceps stronger. It involves
                  raising and lowering your body on your hands with your arms
                  bent behind you, while in a sitting position with your legs
                  straight out in front of you: Tricep dips are great exercises
                  for skiers.
                </p>
              </>
            )}
            {selectedPart === "Chest" && (
              <>
                <br />
                <p />
                <a
                  href="https://www.youtube.com/watch?v=eozdVDA78K0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Dumbell Chest Fly
                </a>
                <p>
                  {" "}
                  - An upper body exercise that works muscle groups in your
                  chest, shoulders, and arms. A dumbbell fly is performed by
                  lying on a flat bench and lowering a pair of dumbbells to your
                  sides while keeping relatively straight arms with slightly
                  bent elbows.
                </p>
                <br />
                <a
                  href="https://www.youtube.com/watch?v=taI4XduLpTk"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Cable Crossover
                </a>
                <p>
                  {" "}
                  - Cable crossover exercise is a compound exercise that targets
                  the chest, shoulders, and triceps muscles. Variations include
                  different upper chest exercises such as high cable crossover,
                  low cable crossover, and one-arm cable crossover.
                </p>
                <br />
                <a
                  href="https://www.youtube.com/watch?v=cIoUZOnypS8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Svend Press
                </a>
                <p>
                  {" "}
                  - The Svend press is a pressing movement used to increase the
                  muscle growth of the chest.
                </p>
              </>
            )}
            {selectedPart === "Back" && (
              <>
                <br />
                <p />
                <a
                  href="https://www.youtube.com/watch?v=op9kVnSso6Q"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Deadlift
                </a>
                <p>
                  {" "}
                  - The deadlift is a weight training exercise in which a loaded
                  barbell or bar is lifted off the ground to the level of the
                  hips, torso perpendicular to the floor, before being placed
                  back on the ground.
                </p>
                <br />
                <a
                  href="https://www.youtube.com/watch?v=stwYTTPXubo"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Band Pull Apart
                </a>
                <p>
                  {" "}
                  - Band pull-aparts are an isolation exercise designed to
                  target muscle groups in your shoulders and upper back. Perform
                  band pull-aparts by holding a resistance band with a
                  shoulder-width grip. Keep your arms straight as you pull the
                  resistance band laterally, extending both arms to either side.
                </p>
                <br />
                <a
                  href="https://www.youtube.com/watch?v=gDHQX1iend4"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Y Raise
                </a>
                <p>
                  {" "}
                  - This exercise involves maintaining the torso at 45 degrees
                  and raising the dumbbells until the elbows are in line with
                  the ears.
                </p>
              </>
            )}
            {selectedPart === "Quadriceps" && (
              <>
                <br />
                <p />
                <a
                  href="https://www.youtube.com/watch?v=g8-Ge9S0aUw"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Forward Lunge
                </a>
                <p>
                  {" "}
                  - A forward lunge is a bodyweight exercise that works muscles
                  throughout your lower body. Perform forward lunges by taking a
                  large step forward and lowering yourself until your front leg
                  and back leg are both at nearly a 90-degree angle. Then, push
                  into your front heel and foot to raise back up to a standing
                  position.
                </p>
                <br />
                <a
                  href="https://www.youtube.com/watch?v=72BSZupb-1I"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Squat Jump
                </a>
                <p>
                  {" "}
                  - A full-body exercise that primarily strengthens the legs and
                  core. The squat movement focuses on developing the quadriceps
                  and calf muscles while the jump adds a heart rate-boosting
                  cardio element to your strength training.
                </p>
                <br />
                <a
                  href="https://www.youtube.com/watch?v=u_vJD-fiGWA"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Single Leg Squat
                </a>
                <p>
                  {" "}
                  - A squat movement that's performed on only one leg. It adds a
                  balance and stability challenge to the traditional squat.
                  These are sometimes called pistol squats. This type of squat
                  is an intermediate to advanced exercise.
                </p>
              </>
            )}
            {selectedPart === "Hamstrings" && (
              <>
                <br />
                <p />
                <a
                  href="https://www.youtube.com/watch?v=SbSNUXPRkc8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Leg Curl
                </a>
                <p>
                  {" "}
                  - The exercise involves flexing the lower leg against
                  resistance towards the buttocks. There are three types of leg
                  curls. There are seated leg curls, lying leg curls, and
                  standing leg curls.
                </p>
                <br />
                <a
                  href="https://www.youtube.com/watch?v=FujJkRLG1Fg"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Single Leg Deadlift
                </a>
                <p>
                  {" "}
                  - An exercise characterized by a forward hip-hinge movement
                  while lifting one leg off the ground and extending it
                  backwards. Single-leg deadlifts work muscle groups in your
                  posterior chain, including your calf muscles, lower back
                  muscles, hamstrings, and glutes.
                </p>
                <br />
                <a
                  href="https://www.youtube.com/watch?v=3-4pKUhkzoQ"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Nordic Hamstring Curl
                </a>
                <p>
                  {" "}
                  - An exercise in which a person kneels with their feet fixed
                  in position and lowers their body by extending the knee. It
                  reduces hamstring injuries in athletes, and is commonly used
                  as a form of injury prevention.
                </p>
              </>
            )}
            {selectedPart === "Calves" && (
              <>
                <br />
                <p />
                <a
                  href="https://www.youtube.com/watch?v=abHsgVMc0Z8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Barbell Seated Calf Raise
                </a>
                <p>
                  {" "}
                  - The exercise is performed from a seated position while the
                  weight rests on the upper leg, just above the knee. The person
                  engaged in this exercise lifts the weight by pushing down on
                  the balls of the feet.
                </p>
                <br />
                <a
                  href="https://www.youtube.com/watch?v=abHsgVMc0Z8"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Leg Press Calf Raise
                </a>
                <p>
                  {" "}
                  - An exercise that uses the leg press machine to work the
                  calves. With the toes and balls of your feet on the platform
                  but heels off, you push forward to work the calves.
                </p>
                <br />
                <a
                  href="https://www.youtube.com/watch?v=IrxfRHGiGE0"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Standing Dumbbell Calf Raise
                </a>
                <p>
                  {" "}
                  - A popular exercise to target the calf muscles of the lower
                  leg. It can be performed for time or for reps, either two
                  dumbbells, or one if balance is a problem and you would like
                  to use your free hand to hold a fixed object.
                </p>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Exercise;
