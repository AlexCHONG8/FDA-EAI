# Design of Functional Testing for Epinephrine Auto-Injector

This document provides the design of the functional tests for the Summed Medtech epinephrine auto-injector. These tests are based on the requirements outlined in `requirements.md`.

## 1. Dose Accuracy and Delivered Volume

*   **Purpose:** To ensure that the auto-injector consistently delivers the correct volume of epinephrine, as per the product specification and FDA guidelines.
*   **Procedure:**
    1.  A statistically significant number of auto-injectors will be selected from different manufacturing batches.
    2.  Each auto-injector will be activated into a container of appropriate size.
    3.  The delivered volume will be determined by gravimetric analysis (measuring the weight of the delivered drug and converting it to volume using the drug's density).
    4.  The results will be analyzed using population bioequivalence (PBE) to compare the test product to a reference product.
*   **Expected Outcome:** The delivered volume for each device should be within the specified tolerance (e.g., ±10% of the nominal volume). The PBE analysis should demonstrate bioequivalence to the reference product.

## 2. Activation Force and User Handling

*   **Purpose:** To verify that the auto-injector can be used easily and safely by the intended user population.
*   **Procedure:**
    1.  A force gauge will be used to measure the force required to remove the safety cap and to activate the device.
    2.  A human factors study will be conducted with a representative sample of the target user population (including individuals with dexterity impairments).
    3.  Participants will be asked to perform the injection on a simulated injection pad.
    4.  Their ability to correctly perform all steps will be observed and recorded.
*   **Expected Outcome:** The activation force shall be within the specified range (e.g., 2-5 Newtons). The human factors study should demonstrate that the vast majority of users can operate the device correctly without error.

## 3. Injection Time and Needle Exposure

*   **Purpose:** To ensure the device injects the drug over a suitable period and that the needle is exposed for the correct duration to ensure intramuscular delivery.
*   **Procedure:**
    1.  A high-speed camera will be used to record the injection process.
    2.  The time from the start of needle movement to the end of injection will be measured.
    3.  The depth of needle penetration into a soft foam block (simulating tissue) will be measured.
    4.  The duration of needle exposure will be recorded.
*   **Expected Outcome:** The injection time should be within the specified range (e.g., 3-10 seconds). The needle penetration depth should be within the specified range for intramuscular injection (e.g., 15-25 mm). The needle should be shielded immediately after the injection is complete.

## 4. Device Durability and Robustness

*   **Purpose:** To ensure the auto-injector can withstand the stresses of normal use and transport without compromising its function or safety.
*   **Procedure:**
    1.  Devices will be subjected to a series of environmental and mechanical stress tests, including:
        *   Drop testing from various heights and orientations (as per ASTM standards).
        *   Vibration testing to simulate transport.
        *   Exposure to a range of temperatures and humidity levels.
    2.  After each stress test, the devices will be inspected for damage and will undergo the full set of functional tests (dose accuracy, activation force, etc.).
*   **Expected Outcome:** The device should show no signs of critical damage (e.g., cracks, broken components) after stress testing. The functional performance of the device should not be significantly affected by the stress tests.

## 5. Container Closure Integrity (CCI)

*   **Purpose:** To ensure the sterility and stability of the drug product by confirming that the container closure system prevents microbial ingress and leakage.
*   **Procedure:**
    1.  A sensitive leak detection method will be used, such as dye ingress or helium leak testing.
    2.  A sample of devices will be submerged in a dye solution under vacuum and then inspected for any dye penetration.
    3.  Alternatively, the devices will be placed in a helium-filled chamber, and a mass spectrometer will be used to detect any helium that has leaked into the syringe.
    4.  CCI testing will be performed on devices at the beginning and end of their shelf life.
*   **Expected Outcome:** There should be no evidence of leakage or ingress in any of the tested devices. The container closure system must maintain its integrity throughout the product's shelf life.
