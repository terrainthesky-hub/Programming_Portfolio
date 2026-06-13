---
layout: post
title: Novel Spiking Neural Network Architecture
subtitle: Python
---

I went down a rabbit hole a while ago thinking about neural networks and how we’re emulating neurons with the action potentials of real neurons, firing and not firing, 1 and 0, but I realized we were missing out on a crucial part of the information; the cadence of neurons firing, the firing over time.

I had some discussions about this on the internet and someone told me about how someone else had thought of this problem and it was actively worked on by people throughout history, which were spiking neural networks to account for the firing over time rather than how our current neural network neuron architectures work.

Unfortunately, spiking neural networks often resulted in less accurate predictions than traditional neural networks, and I was curious to investigate. I worked with Gemini 3.1 to come up with this spiking neural network with some additions.

https://github.com/terrainthesky-hub/Neuro-Symbolic-SNN

This is a spiking neural network basically updating the weights in real time, but unlearning bad concepts and ignoring non crucial information that would contradict with valuable information. I was worried about malicious contamination in the unlearning process--I imagined a discretionary layer, maybe even an established LLM to discern and recognize patterns, could be used as a meta processing part. Finally, another problem I thought of, the data training curve, we want to generalize and learn as we go, but also keep a map of the learning. How do we solve this problem--I was thinking the discretionary layer LLM could have an embedded vector space to work within to plan this out and update the plan as it goes.

I vibed this with Gemini 3.1 pro and modified it a bit and it worked.

After a couple tweaks and runs it mostly solved MNIST but resulted in some dead neurons which are a common occurrence in spiking neural networks as per my understanding.


🎓 CONTINUAL LEARNING SESSION FINISHED
Final Cognitive Map Mastery:
 - Digit_0: 100.0%
 - Digit_1: 100.0%
 - Digit_2: 95.0%
 - Digit_3: 95.0%
 - Digit_4: 100.0%
 - Digit_5: 95.0%
 - Digit_6: 0.0%
 - Digit_7: 100.0%
 - Digit_8: 100.0%
 - Digit_9: 100.0%
Total Energy Cost (Spikes Fired): 358454.0

So I was urged to try this on a more challenging problem like CIFAR_10 and I had some back and forth with using Gemini because I wanted a model that was good at generalized learning outside of just coding since I was merging concepts of neurophysiology and machine learning. Interestingly, the LLM came up with the idea for a hippocampal layer, which in terms of neural networks turned out to be a long term memory consolidation modification and the results were truly interesting.

🎓 CONTINUAL LEARNING SESSION FINISHED
Final Cognitive Map Mastery:
- Plane: 47.6%
- Car : 1.0%
- Bird : 15.5%
- Cat : 33.5%
- Deer : 49.2%
- Dog : 36.0%
- Frog : 61.2%
- Horse: 76.0%
- Ship : 72.1%
- Truck: 48.2%

This time I was able to achieve no dead neurons, although there were at least somewhat atrophied neurons in the spiking neural network. The network also managed to get 68% accuracy at its peak with a spiking neural network which I think is SOTA. The really interesting things are that it seemed to scale indefinitely, with equilibrium floors and ceilings in its learning accuracy, during 5000 epochs, with occasional interventions from the discretionary layer which seemed to affect the learning greatly, helping to prevent convergence. It tended to hit a peak and then drop suddenly once the learning was no longer going up, but noticeably it would drop below floor equilibrium sometimes but that floor always seemed to be increasing.

After some more testing I learned the discretionary layer was actually somewhat superfluous in the results, and this hypothetical architecture would potentially be more useful for future learning in something like an LLM since that would be dealing with abstract concepts that it would need to gate against whereas something like CIFAR_10 is just an object classifier where there’s no real potential data contamination in the training. The truly valuable idea came from the hippocampal emulation layer that was actually the LLM’s idea. Managing to achieve no dead neurons in a spiking neural network was the truly novel thing about this experiment.

I would love to test this more and potentially at a greater scale and work with a more learned machine learning engineer who can better tweak and fine tune parameters, but it’s definitely something worth investigating further because Spiking Neural Networks offer potetnially 90% efficiency gains over traditional neural networks because they only use activated neurons instead of all the neurons like in standard models.