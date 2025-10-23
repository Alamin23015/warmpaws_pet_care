const WinterTips = () => {
  return (
    <div className="my-24" data-aos="fade-left">
      <h2 className="text-4xl font-bold text-center mb-12">Winter Care Tips</h2>
      <div className="collapse collapse-plus bg-base-200 mb-2">
        <input type="radio" name="my-accordion-3" defaultChecked />
        <div className="collapse-title text-xl font-medium">Protect Those Paws</div>
        <div className="collapse-content">
          <p>Salt and de-icers can be painful. Wipe your pet's paws after every walk. Consider using booties or a paw balm for extra protection.</p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200 mb-2">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">Bundle Up!</div>
        <div className="collapse-content">
          <p>Short-haired or small pets get cold quickly. A well-fitting coat or sweater can make a big difference in their comfort and safety.</p>
        </div>
      </div>
      <div className="collapse collapse-plus bg-base-200">
        <input type="radio" name="my-accordion-3" />
        <div className="collapse-title text-xl font-medium">Limit Outdoor Time</div>
        <div className="collapse-content">
          <p>In freezing temperatures, don't stay out too long. Frequent, short walks are better than one long one. Never leave a pet unattended in a cold car.</p>
        </div>
      </div>
    </div>
  );
};

export default WinterTips;